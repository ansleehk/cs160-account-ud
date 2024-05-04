import AccountDb from "../../src/repo/accountDb";
import crypto from 'crypto';
import HashPasswordService from '../../src/service/hashPassword';

describe('Account Database', () => {

    const accountDb = AccountDb.getInstance();

    test("Create a User", async () => {
        const hashPasswordService = new HashPasswordService();
        const [hashedPassword, salt] = await hashPasswordService.hashPassword("'RGT2ghihir2!@'");
        const userData = {
            UserUUID: crypto.randomUUID(),
            Email: "testing@example.com",
            DisplayName: "Testing",
            HashedPasswordWithSalt: hashedPassword,
            Active: true
        };
        await accountDb.createUser(userData);
    });

    test("Get User Status", async () => {
        const email = "ok@ok.com";
        const userStatus = await accountDb.getUserStatus(email);
        console.log(userStatus);
    });

    test("Count User By Email", async () => {
        const email = "ok@ok.com";
        const userCount = await accountDb.countUserByEmail(email);
        expect(userCount).toBe(1); // Assuming user with this email exists
    });

    test("Get Hashed Password", async () => {
        const email = "ok@ok.com";
        const hashedPassword = await accountDb.getHashedPassword(email);
        console.log(hashedPassword);
    });

    test("Update User", async () => {
        const userUUID = "028090b9-9077-43a0-b69a-a0e75baa22ad";
        const userData = {
            DisplayName: "Testing"
        };
        await accountDb.updateUser(userUUID, userData);
    });

    test("Get User ID By Email", async () => {
        const email = "ok@ok.com";
        const userUUID = await accountDb.getUserIdByEmail(email);
        console.log(userUUID);
    });
});