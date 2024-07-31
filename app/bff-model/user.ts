

export type User = {
    id: string;
    email: string | null;
    mobile: string | null;
    passwordHash: string;
    firstName: string;
    lastName: string;
    dateCreated: Date;
    avatar: string | null;
};