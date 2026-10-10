export type CreateUserData = {
    username: string;
    email: string;
    password: string;
};
export type LoginUserData = {
    email: string;
    password: string;
};
export type DashboardData = {
    isLoggedIn: true;
    username: string;
    email: string;
} | {
    isLoggedIn: false;
    error?: string;
};

export type LogoutData = {
    isLoggedIn: false;
    message: string;
};

export type CategoryData = {
    results: {
        index: string;
        name: string;
        url: string;
    }[];
};
