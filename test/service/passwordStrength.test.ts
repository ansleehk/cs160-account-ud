import PasswordStrengthChecker from '../../src/service/passwordStrength';

describe('PasswordStrengthChecker', () => {
    describe('isPasswordStrong', () => {
        it('should return true for a strong password', async () => {
            const password = 'RGT2ghihir2!@';
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
    });
});
