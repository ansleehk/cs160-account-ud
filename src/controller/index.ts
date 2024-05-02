import { Request, Response, NextFunction } from 'express';
import UserUpdate from '../service/userUpdate';
import UserDelete from '../service/userDelete';

export const updateUser = async (req: Request, res: Response, next: NextFunction) => {
    const userId = req.userId;
    const { displayName, email, password } = req.body;
    
    try {
        const userUpdate = new UserUpdate(userId, { email: email, password: password, displayName: displayName});

        await userUpdate.update();
        res.status(200).send('User updated');
    } catch (error) {
        next(error);
    }
}

export const deleteUser = async (req: Request, res: Response, next: NextFunction) => {
    const userId = req.userId;
    
    try {
        const userDelete = new UserDelete(userId);

        await userDelete.delete();
        res.status(200).send('User deleted');
    } catch (error) {
        next(error);
    }
}