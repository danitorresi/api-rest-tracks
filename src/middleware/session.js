import { handleHttpError } from '../utils/handleError';

export const authMiddleware = (req, res, next) => {
    try {
        
    } catch (error) {
        handleHttpError(res, 'NOT SESSION', 401)
    }
}