import { RuntimeEnvironment, getRuntimeEnvironment } from './runtime-env';
import Auth from './auth'


type ConfigProps = {
    RuntimeEnvironment: RuntimeEnvironment,
    Auth: typeof Auth,
    AppBaseURL: string,
    AppName: string,    
};

export default {
    RuntimeEnvironment: getRuntimeEnvironment(),
    Auth: Auth,
    AppBaseURL: process.env.APP_BASE_URL,
    AppName: '__secure_my_app'
} as ConfigProps;



export * from './runtime-env';
export * from './page-routes';
