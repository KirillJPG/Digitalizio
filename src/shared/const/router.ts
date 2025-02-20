export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    NOT_FOUND = 'not_found',
    HOME = 'home',
    LOGIN = 'login',
    REGISTER = 'register',
    ROULETTE = 'roulette',
    CRASH = 'crash',
    KENO = 'keno',
    PROFILE = 'profile',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/main',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.NOT_FOUND]: '*',
    [AppRoutes.HOME]: '/',
    [AppRoutes.LOGIN]: '/login',
    [AppRoutes.REGISTER]: '/register',
    [AppRoutes.ROULETTE]: '/roulette',
    [AppRoutes.CRASH]: '/crash',
    [AppRoutes.KENO]: '/keno',
    [AppRoutes.PROFILE]: '/profile',
}; 