import multer from 'multer';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        const pathStorage = `${__dirname}/../storage`;
        cb(null, pathStorage)
    },
    filename: function(req, file, cb) {

        const ext = file.originalname.split(".").pop(); // ["name", "png"] png
        const filename = `file-${Date.now()}.${ext}`; // file-21336456465213.mp4 Genera un nombre aleatorio
        cb(null, filename)
    }
});

const upload = multer({
    storage: storage
})

export default upload;


//Los archivos tienen distintas extenciones micv.pdf mifoto.png mivideo.mp4
//Lo primero que hacemos es obtener la extención