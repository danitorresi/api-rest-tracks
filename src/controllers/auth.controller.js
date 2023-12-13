import { matchedData } from "express-validator";
import { encrypt, compare } from "../utils/handlePassword.js";
import models from '../models/index.model.js';
import { tokenSign } from "../utils/handleJwt.js";
import { handleHttpError } from '../utils/handleError.js';

export const register = async (req, res) => {
    try {
        req = matchedData(req);

        const password = await encrypt(req.password);

        const body = {...req, password}; //Sobreescribe la propiedad password del objeto req.

        const dataUser = await models.userModel.create(body);

        const data = {
            token: await tokenSign(dataUser),
            user: dataUser
        }

        res.send({data});
    } catch (error) {
        handleHttpError(res, 'Error al registrar un usuario', 403);
    }
    
}

export const login = async (req, res) => {
    try {
        const req = req.matchedData(req);

        const user = await models.userModel.findOne({email:req.email}).select('password name role email');

        if (!user) {
            handleHttpError(res, 'El usuario no existe', 404);
            return;
        }

        const hashPassword = user.get('password');

        const check = await compare(req.password, hashPassword);

        if (!check) {
            handleHttpError(res, 'Contraseña incorrecta', 403);
        }

        user.set('password', undefined, {strict: false})

        const data = {
            token: await tokenSign(user),
            user
        }

        res.json({data: data});

    } catch (err) {
        handleHttpError(res, 'Error al loggear', 403);
    }
}