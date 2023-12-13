import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET;

export const tokenSign = async (user) => {
    const sign = jwt.sign(
        {
            _id: user._id,
            role: user.role
        },
        JWT_SECRET,
        {
            expiresIn: "2h"
        }
    );

    return sign;
};

export const verifyToken = async (tokenJwt) => {
    try {
        return jwt.verify(tokenJwt, JWT_SECRET);
    } catch (err) {
        return null;
    }
}