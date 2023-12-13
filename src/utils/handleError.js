export const handleHttpError = (res, message, code) => {
    res.status(code);
    res.json({error: message});
}