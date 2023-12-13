import { Router } from 'express';
import { createItem, deleteItem, getItem, getItems, updateItem } from '../controllers/tracks.controller.js';
import { validatorCreateItem, validatorGetItem } from '../validators/tracks.validator.js';
import { customHeader } from '../middleware/customheader.js';

const router = Router();

router.get('/', getItems);

router.get('/:id', validatorGetItem, getItem);

router.post('/', validatorCreateItem, customHeader, createItem);

router.put('/:id',validatorGetItem, validatorCreateItem, updateItem);

router.delete('/:id', validatorGetItem, deleteItem);

export { router };