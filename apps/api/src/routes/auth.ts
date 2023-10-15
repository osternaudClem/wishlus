import { Router } from 'express';
import { authController } from '../controllers';

const router = Router();

router.post('/login', authController.login);

router.post('/loginGoogle', authController.loginWithGoogle);

router.post('/registration', authController.registration);

export default router;
