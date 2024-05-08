import { Router } from 'express';
import { handleExpressValidation } from './middleware/validator/expressValidatorHandler.js';
import captchaVerify from './middleware/captcha.js';
import userIdExtractor from './middleware/userIdExtractor.js';
import * as controller from './controller/index.js';

const router = Router();

const USER_API_ENDPOINT = 'user';

router.use(captchaVerify);

router.put(`/account/:userId/${USER_API_ENDPOINT}`, userIdExtractor, handleExpressValidation, controller.updateUser);

router.delete(`/account/:userId/${USER_API_ENDPOINT}`, userIdExtractor, handleExpressValidation, controller.deleteUser);

export default router;