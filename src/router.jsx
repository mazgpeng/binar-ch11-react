import { createBrowserRouter } from 'react-router-dom'
import ContentLandingPage from './pages/ContentLandingPage';
import {ContentHome} from './pages/ContentHome';
import ContentGameList from './pages/ContentGames';
import {ContentLogin} from './pages/ContentLogin';
import {ContentRegister} from './pages/ContentRegister';
import {ContentProfile } from './pages/ContentProfile';
import {ContentProfileEdit } from './pages/ContentProfileEdit';
import Board from './pages/board';
import GameDetail from './pages/ContentGameDetail';



import Navsbar from './navbar/Navsbar';

const Router = createBrowserRouter([

    {
        element : <Navsbar/>,
        children: [
            {
                path: '/',
                element: <ContentLandingPage/>

            },
            {
                path: '/home',
                element: <ContentHome />

            },
            {
                path: '/games',
                element: <ContentGameList />

            },
            {
                path: '/games-detail',
                element: <GameDetail />

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
            {
                path: '/profile/edit',
                element: <ContentProfileEdit/>
            },
            {
                path: '/leaderboard',
                element: <Board />
            }
        ]
    }
])


export default Router;