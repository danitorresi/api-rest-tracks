import app from './app.js';

const port = process.env.PORT_APP || 3001;

app.listen(port, () => {
    console.log(`Servidor a la escucha en el puerto ${port}`);
});