import AccountDb from "../repo/accountDb";

export default class UserDelete {
    private accountDb = AccountDb.getInstance();
    private userId: string;
    constructor(userId: string) {
        this.userId = userId;
    }
    private async deactivateUserInDb() {
        await this.accountDb.updateUser(this.userId, {Active: false});
    }
    public async delete() {
        await this.deactivateUserInDb();
    }
}