import { matchedData } from 'express-validator';
import models from '../models/index.model.js';
import { handleHttpError } from '../utils/handleError.js';

export const getItems = async (req, res) => {
    try {
        const data = await models.trackModel.find({});

        res.json({data});
    } catch (err) {
        handleHttpError(res, 'ERROR EN GET ITEMS TRACKS', 403);
    }
}

export const getItem = async (req, res) => {
    try {
        const bodyClean = matchedData(req);
        
        const { id } = bodyClean;

        const data = await models.trackModel.findById(id);

        res.json({data});
    } catch (err) {
        handleHttpError(res, 'ERROR EN GET ITEM TRACKS', 403);
    }
}

export const createItem = async (req, res) => {
    try {
        //const body = req.body;
        //console.log(req.body);

        console.log(req);

        const bodyClean = matchedData(req);

        //console.log(bodyClean);

        const data = await models.trackModel.create(bodyClean);
    
        res.send({data});
    } catch (err) {
        handleHttpError(res, 'ERROR EN CREATE ITEM TRACKS', 403);
    }
}

export const updateItem = async (req, res) => {
    try {
        //const body = req.body;
        const bodyClean = matchedData(req);

        const { id } = bodyClean;

        const data = await models.trackModel.findOneAndUpdate({_id:id}, bodyClean);
        

        console.log(bodyClean);
        console.log(id);
        console.log(data);

        res.json({message: 'Registro Actualizado con éxito'});
    } catch (err) {
        //console.log(err);
        handleHttpError(res, 'ERROR EN UPDATE ITEM TRACKS', 403);
    }
}

export const deleteItem = async (req, res) => {
    try {
        const bodyClean = matchedData(req);
        
        const { id } = bodyClean;

        //const data = await models.trackModel.delete({_id:id});
        const data = await models.trackModel.deleteOne({_id:id});

        res.json({message: 'Registro Eliminado con éxito'});
    } catch (err) {
        handleHttpError(res, 'ERROR EN DELETE ITEM TRACKS', 403);
    }
}






//************************************************* */

//Con la función matchedData() de express validator limpiamos el body, es decir verificamos que los datos que nos llegan se corresponden con el modelo.