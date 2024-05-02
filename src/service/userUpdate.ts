import AccountDb from "../repo/accountDb";
import HashPasswordService from "./hashPassword";
import PasswordStrengthChecker from "./passwordStrength";
import { ServiceRestError } from "./ServiceRestError";

type UserUpdateData = {
    email?: string;
    password?: string;
    displayName?: string;
}

export default class UserUpdate {
    private accountDb = AccountDb.getInstance();

    private userId: string;
    private userUpdateData: UserUpdateData;
    constructor(userId: string, userUpdateData: UserUpdateData) {
        this.userId = userId;
        this.userUpdateData = userUpdateData;
    }
    private async checkPasswordStrength() {
        const passwordStrengthChecker = new PasswordStrengthChecker(this.userUpdateData.password!);
        const isStrong = await passwordStrengthChecker.isPasswordStrong();
        if (!isStrong) {
            throw new ServiceRestError("Password is not strong enough", 400, "Password is not strong enough");
        }
    }
    private generateHashedPassword() {
        const hashPasswordService = new HashPasswordService();
        const [hashedPassword] = hashPasswordService.hashPassword(this.userUpdateData.password!);
        return hashedPassword;
    }

    private async updatePasswordInDb() {
        const hashedPassword = this.generateHashedPassword();
        await this.accountDb.updateUser(this.userId, {HashedPasswordWithSalt: hashedPassword});
    }
    private async updateDisplayNameInDb() {
        await this.accountDb.updateUser(this.userId, {DisplayName: this.userUpdateData.displayName});
    }
    private async updateEmailInDb() {
        await this.accountDb.updateUser(this.userId, {Email: this.userUpdateData.email});
    }
    public async update() {
        if (this.userUpdateData.password) {
            await this.checkPasswordStrength();
            await this.updatePasswordInDb();
        }
        if (this.userUpdateData.displayName) {
            await this.updateDisplayNameInDb();
        }
        if (this.userUpdateData.email) {
            await this.updateEmailInDb();
        }
    }
}