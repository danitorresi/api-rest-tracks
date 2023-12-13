import mongoose from 'mongoose';

export const dbConnectMongo = () => {
    const MONGODB_URI = process.env.MONGODB_URI;

    mongoose.connect(MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then((res) => console.log('******* Conexión a la base de datos mongo exitosa ********' + res)).catch((err) => console.log('****** Error de conexión a la base de datos mongo *******' + err))
}