import UserUpdate from '../../src/service/userUpdate';

describe('user Update', () => {

    it('should update email successfully', async () => {
        const userId = '6a6721cc-e8f9-41c9-b3de-9d7368ff4299';
        const userUpdateData = { email: 'test1@example.com' };
        
        const userUpdate = new UserUpdate(userId, userUpdateData);

        await userUpdate.update();
    });

    it('should update password successfully', async () => {
        const userId = '6a6721cc-e8f9-41c9-b3de-9d7368ff4299';
        const userUpdateData = { password: 'RGT2ghihaar2!@' };
        
        const userUpdate = new UserUpdate(userId, userUpdateData);

        await userUpdate.update();
    });

    it('should update displayname successfully ', async () => {
        const userId = '6a6721cc-e8f9-41c9-b3de-9d7368ff4299';
        const userUpdateData = { displayName: 'Testing1' };
        
        const userUpdate = new UserUpdate(userId, userUpdateData);

        await userUpdate.update();
    });
});