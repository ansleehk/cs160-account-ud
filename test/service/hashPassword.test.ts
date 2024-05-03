import HashPasswordService from '../../src/service/hashPassword';

describe('HashPasswordService', () => {
    
    const hashPasswordService = new HashPasswordService();

    it('should hash password successfully and verify it', async() => {
        const plainPassword = 'password';
        const [hashedPassword, salt] = await hashPasswordService.hashPassword(plainPassword);
        const result = await hashPasswordService.verifyPasswordWithHash(plainPassword, hashedPassword);

        expect(result).toBe(true);
    });

    it('should hash password successfully and fail verification with incorrect password', () => {
        const plainPassword = 'password';
        const incorrectPassword = 'incorrectPassword'; 
        const [hashedPassword, salt] = hashPasswordService.hashPassword(plainPassword);
        const result = hashPasswordService.verifyPasswordWithHash(incorrectPassword, hashedPassword);
    
        expect(result).toBe(false);
    });
});