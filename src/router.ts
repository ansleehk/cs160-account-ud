import { Router } from 'express';
import { handleExpressValidation } from './middleware/validator/expressValidatorHandler.js';
import captchaVerify from './middleware/captcha.js';
import userIdExtractor from './middleware/userIdExtractor.js';
import * as controller from './controller/index.js';

const router = Router();

router.use(captchaVerify);

router.use(userIdExtractor);

router.put('/:userId', controller.updateUser);

router.delete('/:userId', controller.deleteUser);

router.use(handleExpressValidation);

export default router;