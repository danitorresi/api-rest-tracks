const engine = process.env.DB_ENGINE || null;

const pathModel = engine === 'mysql' ? './mysql' : './nosql';

import userModel from './nosql/user.model.js';
import storageModel from './nosql/storage.model.js';
import trackModel from './nosql/track.model.js';

const models = {
    userModel,
    storageModel,
    trackModel
}

export default models;

/*

import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const engine = process.env.DB_ENGINE || null;

const pathModel = engine === 'mysql' ? './mysql' : './nosql';

import(`./${file}`).then((moduleRouter) => {
    router.use(`/${name}`, moduleRouter.router);
})
*/