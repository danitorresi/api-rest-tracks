import bcryptjs from 'bcryptjs';

export const encrypt = async (passwordPlain) => {
    const hash = await bcryptjs.hash(passwordPlain, 5);
    return hash;
}

export const compare = async (passwordPlain, hash) => {
    return await bcryptjs.compare(passwordPlain, hash);
}

