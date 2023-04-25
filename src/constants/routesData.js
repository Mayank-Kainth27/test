import {
    Home,
    Error,
    Login
} from '../screens';

const RoutesData = [
    {
        Component: Login,
        publicRoute: "yes",
        path: '/login'
    },
    {
        Component: Home,
        publicRoute: "no",
        path: '/'
    },
    {
        Component: Error,
        publicRoute: "yes",
        path: '*'
    }
]

export default RoutesData;