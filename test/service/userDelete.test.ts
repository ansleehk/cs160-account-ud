import UserDelete from '../../src/service/userDelete';

describe('user Delete', () => {

    it('should delete email successfully', async () => {
        const userId = '6a6721cc-e8f9-41c9-b3de-9d7368ff4299';
        
        const userDelete = new UserDelete(userId);

        await userDelete.delete();
    });
});