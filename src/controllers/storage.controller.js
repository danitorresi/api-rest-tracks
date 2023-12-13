import fs from 'fs';
//import { matchedData } from 'express-validator';
import models from '../models/index.model.js';
import { handleHttpError } from '../utils/handleError.js';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const PUBLIC_URL = process.env.PUBLIC_URL;
const MEDIA_PATH = `${__dirname}/../storage`;

export const getItems = async (req, res) => {
    try {
        const filesData = await models.storageModel.find();

        res.json({filesData});
    } catch (err) {
        handleHttpError(res, 'Error al obtener archivos multimedia', 403);
    }
}

export const getItemById = async (req, res) => {
    try {
        //const bodyClean = matchedData(req);

        const id = req.params.id;

        const fileData = await models.storageModel.findById(id);

        res.json(fileData);
    } catch (err) {
        handleHttpError(res, 'Error al obtener archivo multimedia por id', 403);
    }
}

export const createItem = async (req, res) => {
    try {
        const { body, file } = req;

        const fileData = {
            filename: file.filename,
            url: `${PUBLIC_URL}/${file.filename}`
        }

        const data = await models.storageModel.create(fileData);

        res.json({message: 'Archivo Subido Exitosamente', data});
    } catch (error) {
        handleHttpError(res, 'Error al subir archivo', 403);
    }

}

export const deleteItem = async (req, res) => {
    try {
        //const bodyClean = matchedData(req);

        const id = req.params.id;

        const fileData = await models.storageModel.findById(id);

        const deleteResponse = await models.storageModel.deleteOne({_id:id});

        const filePath = `${MEDIA_PATH}/${fileData.filename}`;

        fs.unlinkSync(filePath);

        const respuesta = {filePath, deleted: deleteResponse};

        res.json({message: 'Archivo Eliminado con Éxito', respuesta: respuesta});
    } catch (err) {
        handleHttpError(res, 'Error al eliminar archivo multimedia', 403);
    }
}