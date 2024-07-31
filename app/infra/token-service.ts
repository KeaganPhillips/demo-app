import jwt from 'jsonwebtoken';
import type { User } from "bff-model/user";
import config from "./config";
import type { Cookie } from 'elysia';

const dummyRoles = [
    { id: '1', name: 'Admin' },  
];


export type Claims = {
    sub: string;
    email: string | null;
    mobile: string | null;    
    firstName: string;
    lastName: string;    
    roleIds: string[];
}

export const createToken = async (user: User) : Promise<string> => {

    const secretKey = config.Auth.Secret;
    const roleIds = dummyRoles.map(x => x.id);

    const claims: Claims = {
        sub: user.id,
        email: user.email,
        mobile: user.mobile,
        firstName: user.firstName,
        lastName: user.lastName,        
        roleIds: roleIds
    };

    const token = jwt.sign({ claims }, secretKey, { expiresIn: `${config.Auth.CookieMaxAge}s` });    

    return token;
};



export const getClaims = (cookie: Record<string, Cookie<any>>) : Claims => {

    const token = cookie.__secure_my_app.value;
    var decoded = jwt.decode(token) as any;

    return {
        firstName: decoded.claims.firstName as string,
        lastName: decoded.claims.lastName as string,
        email: decoded.claims.email as string,        
        roleIds: decoded.claims.roles as string[],
        sub: decoded.claims.sub as string,
        mobile: decoded.claims.mobile as string
    }
}