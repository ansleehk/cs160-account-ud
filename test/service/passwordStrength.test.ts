import PasswordStrengthChecker from '../../src/service/passwordStrength';

describe('PasswordStrengthChecker', () => {
    describe('isPasswordStrong', () => {
        it('should return true for a strong password', async () => {
            const password = 'RGT2ghihir2!@';
            const passwordStrengthChecker = new PasswordStrengthChecker(password);
            const isStrong = await passwordStrengthChecker.isPasswordStrong();
            expect(isStrong).toBe(true);
        });

        it('should return true for another strong password', async () => {
            const password = '5trongP@ssw0rd!';
            const passwordStrengthChecker = new PasswordStrengthChecker(password);
            const isStrong = await passwordStrengthChecker.isPasswordStrong();
            expect(isStrong).toBe(true);
        });

        it('should return true for a passphrase with special characters', async () => {
            const password = 'MyPassphrase$With@SpecialCharacters123';
            const passwordStrengthChecker = new PasswordStrengthChecker(password);
            const isStrong = await passwordStrengthChecker.isPasswordStrong();
            expect(isStrong).toBe(true);
        });

        it('should return false for a weak password', async () => {
            const password = 'weakpassword';
            const passwordStrengthChecker = new PasswordStrengthChecker(password);
            const isStrong = await passwordStrengthChecker.isPasswordStrong();
            expect(isStrong).toBe(false);
        });

        it('should return false for short passwprd', async () => {
            const password = 'short';
            const passwordStrengthChecker = new PasswordStrengthChecker(password);
            const isStrong = await passwordStrengthChecker.isPasswordStrong();
            expect(isStrong).toBe(false);
        });

        it('should return false for a password with only lowercase letters', async () => {
            const password = 'lowercaseonly';
            const passwordStrengthChecker = new PasswordStrengthChecker(password);
            const isStrong = await passwordStrengthChecker.isPasswordStrong();
            expect(isStrong).toBe(false);
        });

        it('should return false for a password with only uppercase letters', async () => {
            const password = 'UPPERCASEONLY';
            const passwordStrengthChecker = new PasswordStrengthChecker(password);
            const isStrong = await passwordStrengthChecker.isPasswordStrong();
            expect(isStrong).toBe(false);
        });

        it('should return false for a password with only numbers', async () => {
            const password = '123456789';
            const passwordStrengthChecker = new PasswordStrengthChecker(password);
            const isStrong = await passwordStrengthChecker.isPasswordStrong();
            expect(isStrong).toBe(false);
        });

        it('should return false for a password without special characters', async () => {
            const password = 'NoSpecialCharacters123';
            const passwordStrengthChecker = new PasswordStrengthChecker(password);
            const isStrong = await passwordStrengthChecker.isPasswordStrong();
            expect(isStrong).toBe(false);
        });
    });
});
