export const customHeader = (req, res, next) => {
    try {
        const apiKey = req.headers.api_key;
        if (apiKey === 'leifer-01') {
            next();
        } else {
            res.status(403);
            res.send({error: "APIKEY NO ES CORRECTA"});
        }
    } catch (err) {
        res.status(403);
        res.send({error: "OCURRIÓ UN ERROR EN CUSTOM HEADER"});
    }
}