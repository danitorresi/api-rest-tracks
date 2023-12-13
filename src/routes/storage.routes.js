import { Router } from 'express';
import upload from '../utils/handleStorage.js';
import { createItem, getItems, getItemById, deleteItem } from '../controllers/storage.controller.js';

const router = Router();

router.get('/', getItems);

//router.get('/:id',/* validatorGetFileMultimedia */, getFileMultimediaById);
router.get('/:id', getItemById);

router.post('/', upload.single('myfile'), createItem);

//router.delete('/:id', /* validatorGetFileMultimedia */, deleteFileMultimedia);
router.delete('/:id', deleteItem);

export { router };