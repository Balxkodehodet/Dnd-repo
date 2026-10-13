
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

export type classData = {
    class: string,
    likes: string,
    primaryAbility: string,
    Complexity: string 
}
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