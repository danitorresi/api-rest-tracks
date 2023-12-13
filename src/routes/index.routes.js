import { Router } from 'express';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const router = Router();

const __dirname = dirname(fileURLToPath(import.meta.url));

const PATH_ROUTES = __dirname;

const removeExtension = (filename) => {
    return filename.split('.').shift();
}

fs.readdirSync(PATH_ROUTES).filter((file) => {
    const name = removeExtension(file);
    if (name !== 'index') {
        import(`./${file}`).then((moduleRouter) => {
            router.use(`/${name}`, moduleRouter.router);
        })
    }
});

export default router