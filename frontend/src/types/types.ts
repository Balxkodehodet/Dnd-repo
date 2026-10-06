export type CreateUserData = {
    username: string;
    email: string;
    password: string;
};
export type LoginUserData = {
    email: string;
    passwordhash: string;
};