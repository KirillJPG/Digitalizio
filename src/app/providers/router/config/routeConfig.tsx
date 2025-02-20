import { RouteProps } from 'react-router-dom';
import { AppRoutes, RoutePath } from '@/shared/const/router';
import { lazy } from 'react';

const Home = lazy(() => import('@/pages/HomePage/ui/HomePage'));
const Main = lazy(() => import('@/pages/MainPage/ui/MainPage'));
const About = lazy(() => import('@/pages/AboutPage/ui/AboutPage'));
const NotFound = lazy(() => import('@/pages/NotFoundPage/ui/NotFoundPage'));
const Login = lazy(() => import('@/pages/LoginPage/ui/LoginPage'));
const Register = lazy(() => import('@/pages/RegisterPage/ui/RegisterPage'));
const RoulletePage = lazy(() => import('@/pages/RoulletePage/ui/RoulletePage'));
const CrashPage = lazy(() => import('@/pages/CrashPage/ui/CrashPage'));
const KenoPage = lazy(() => import('@/pages/KenoPage/ui/KenoPage'));
const ProfilePage = lazy(() => import('@/pages/ProfilePage/ui/ProfilePage'));

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <Main />,
    },
    [AppRoutes.ABOUT]: {
        path: RoutePath.about,
        element: <About />,
    },
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <NotFound />,
    },
    [AppRoutes.HOME]: {
        path: RoutePath.home,
        element: <Home />,
    },
    [AppRoutes.LOGIN]: {
        path: RoutePath.login,
        element: <Login />,
    },
    [AppRoutes.REGISTER]: {
        path: RoutePath.register,
        element: <Register />,
    },
    [AppRoutes.ROULETTE]: {
        path: RoutePath.roulette,
        element: <RoulletePage />,
    },
    [AppRoutes.CRASH]: {
        path: RoutePath.crash,
        element: <CrashPage />,
    },
    [AppRoutes.KENO]: {
        path: RoutePath.keno,
        element: <KenoPage />,
    },
    [AppRoutes.PROFILE]: {
        path: RoutePath.profile,
        element: <ProfilePage />,
    },
}; 