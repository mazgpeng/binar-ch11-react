import { createBrowserRouter } from 'react-router-dom'
import ContentLandingPage from './pages/ContentLandingPage';
import {ContentHome} from './pages/ContentHome';
import ContentGames from './pages/ContentGames';
import ContentLogin from './pages/ContentLogin';
import ContentRegister from './pages/ContentRegister';


import { ContentProfile } from './pages/ContentProfile';

const Router = createBrowserRouter([

    {
        children: [
            {
                path: '/',
                element: <ContentLandingPage />

            },
            {
                path: '/home',
                element: <ContentHome />

            },
            {
                path: '/games',
                element: <ContentGames />

            },
            {
                path: '/login',
                element: <ContentLogin />

            },
            {
                path: '/register',
                element: <ContentRegister />
            },
            {
                path: '/profile',
                element: <ContentProfile />
            },
        ]
    }
])


export default Router;