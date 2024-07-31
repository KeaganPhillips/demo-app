export enum RuntimeEnvironment {
    DEV,
    PROD,
    TEST
};

export const getRuntimeEnvironment = () => 
    RuntimeEnvironment[import.meta.env.ENV as keyof typeof RuntimeEnvironment];
