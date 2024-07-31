import type { User } from "bff-model/user";
import { v4 as uuid } from "uuid";


// Dummy User
const validLoginEmail = 'admin@test.com';
const validLoginPassword = 'p@ssw0rd1';


const getUserByEmail = async (email: string) : Promise<User | null> =>  {    

    // TODO: Get user from database
    if(email !== validLoginEmail)
        return null;
    
    return {
        id: uuid(),
        email: validLoginEmail,
        mobile: '0734567890',
        passwordHash: 'passwordHash',
        firstName: 'Admin',
        lastName: 'User',
        dateCreated: new Date(),
        avatar: 'https://avatar.iran.liara.run/public'
    };    
};

const verifyPassword = async (password: string, passwordHash: string) : Promise<boolean> => {
    return password === validLoginPassword;
}


const insertUserLoginAttempt = async (success: boolean, userId: string) => {
    // TODO: Insert user login attempt into database
};


export type LoginAttemptCommand = {
    email: string,
    password: string
}


export const loginAttemptHandler = async (command: LoginAttemptCommand) : Promise<User | null> => {
        
    const user = await getUserByEmail(command.email);
    if(user == null)
        return null;

    var passwordValid = await verifyPassword(command.password, user.passwordHash);    
    await insertUserLoginAttempt(passwordValid, user.id);

    return passwordValid 
        ? user 
        : null;    

}