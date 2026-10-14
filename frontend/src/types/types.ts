import type {Gender} from './Gender.ts'
export type CreateCharacterDate = {
    race: string;
    portrait: string;
}
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
        index: string | undefined;
        name: string | undefined;
        url: string | undefined;
    }[];
};

export type classProps = {
    singleClass: string | undefined,
    stage: number
};
export type galleryProps = {
    singleImg: string | undefined,
    className: string | undefined,
    stage: number    
}
export type raceProps = {
    singleRace: string | undefined,
    stage: number 
}
export type genderProps = {
    singleGender: Gender
    stage: number
}