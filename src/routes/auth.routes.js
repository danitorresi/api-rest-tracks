import { Router } from 'express';
import { login, register } from '../controllers/auth.controller.js';
import { validatorRegister, validatorLogin } from '../validators/auth.validator.js';

const router = Router();

router.post('/login', validatorLogin, login)

router.post('/register',validatorRegister, register);

export { router };