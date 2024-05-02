import bcrypt from "bcrypt";

export default class HashPasswordService{
    constructor(){}

    public hashPassword(plainPassword: string): Array<string> {
        const SALT_ROUNDS = 10;

        const salt = bcrypt.genSaltSync(SALT_ROUNDS);
        const hashPassword = bcrypt.hashSync(plainPassword, salt);

        return [
            hashPassword, salt
        ]
    }
    
    public verifyPasswordWithHash(plainPassword: string, hashPassword: string): boolean {
        const match = bcrypt.compareSync(plainPassword, hashPassword);
        return match;
    }

}