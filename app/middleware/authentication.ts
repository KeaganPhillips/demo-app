import Elysia from "elysia";
import jwt from 'jsonwebtoken';
import config, { RuntimeEnvironment } from 'infra/config';

export const anonymousRoutes = [
    '/auth/login',
    '/auth/register',
    '/css',
    '/js',
    '/images',
    '/favicon.ico',
    '/anonymous/',
    '/manifest.json'
];

const addCookie = (cookie: any) => {
    cookie[config.AppName].httpOnly = true;
    cookie[config.AppName].value = '';
    cookie[config.AppName].path = '/';

    if(config.RuntimeEnvironment === RuntimeEnvironment.PROD)
    {
        cookie[config.AppName].secure = true;        
        cookie[config.AppName].sameSite = 'Strict';
    }    
};

export const authenticateRequest = (cookie: any) => {
    
    if(cookie === undefined || cookie === null)            
        return { isAuthenticated: false };    
    
    const authCookie = cookie[config.AppName];    
        
    if(authCookie === undefined || authCookie === null)
    {            
        addCookie(cookie);
        return { isAuthenticated: false};
    }

    if(authCookie.value === undefined
        || authCookie.value === null
        || authCookie.value.trim() === '') {
            addCookie(cookie);
            return { isAuthenticated: false}
    }

    const token = authCookie.value;
    try {             
        var decoded = jwt.verify(token, config.Auth.Secret);
        return { isAuthenticated: true, decodedToken: decoded }
    } 
    catch(err) {
        console.log('error: ', err);
        return { isAuthenticated: false}
    }
};

// export default new Elysia()
//     .derive(({ headers, path, cookie }) => {

//         console.log('cookie: ', cookie);

//         const authCookie = cookie[config.AppName];
        
//         if(authCookie === undefined 
//             || authCookie === null)
//         {            
//             addCookie(cookie);
//             return { isAuthenticated: false}
//         }

//         if(authCookie.value === undefined
//             || authCookie.value === null
//             || authCookie.value.trim() === '') {
//                 addCookie(cookie);
//                 return { isAuthenticated: false}
//         }

//         const token = authCookie.value;
//         try {             
//             var decoded = jwt.verify(token, config.Auth.Secret);
//             return { isAuthenticated: true, decodedToken: decoded }
//         } 
//         catch(err) {
//             console.log('error: ', err);
//             return { isAuthenticated: false}
//         }
//     })
//     .onBeforeHandle(({ isAuthenticated, path, set }) => {
        
//         console.log('isAuthenticated: ', isAuthenticated);
        
//         if (anonymousRoutes.find(r => path.startsWith(r)))  
//             return;        

//         if (!isAuthenticated) {
//             if(path.startsWith('/api'))
//             {
//                 set.status = 401;
//                 return 'Unauthorized';
//             }
//             else
//             {                
//                 set.status = 302;
//                 set.headers['HX-Redirect'] = '/login'
//                 set.headers['Location'] = '/login';
//                 return '';
//             }
//         }
//     }); 