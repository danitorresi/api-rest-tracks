import { check } from 'express-validator';
import { validateResults } from '../utils/handleValidator.js';

export const validatorRegister = [
    check("name").exists().notEmpty().isLength({min: 3, max: 99}),
    check("age").exists().notEmpty().isNumeric(),
    check("email").exists().notEmpty().isEmail(),
    check("password").exists().notEmpty().isLength({min: 3, max: 15}),
    (req, res, next) => {
        return validateResults(req, res, next);
    }
];

export const validatorLogin = [
    check("email").exists().notEmpty().isEmail(),
    check("password").exists().notEmpty().isLength({min: 3, max: 15}),
    (req, res, next) => {
        return validateResults(req, res, next);
    }
];