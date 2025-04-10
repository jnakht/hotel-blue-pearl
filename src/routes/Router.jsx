import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home";
import About from "../pages/About";
import Login from "../pages/Login";
import Register from "../pages/Register";
import LuxuryRooms from "../pages/LuxuryRooms";
import RooftopRestaurant from "../pages/RooftopRestaurant";
import FacialAndSkinCare from "../pages/FacialAndSkinCare";
import ConferenceHall from "../pages/ConferenceHall";
import HomeRoot from "../layouts/HomeRoot";


const Router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <HomeRoot></HomeRoot>,
                children: [
                    {
                        path: '/',
                        element: <Home></Home>
                    },
                    {
                        path: '/segment-1',
                        element: <LuxuryRooms></LuxuryRooms>
                    },
                    {
                        path: '/segment-2',
                        element: <RooftopRestaurant></RooftopRestaurant>
                    },
                    {
                        path: '/segment-3',
                        element: <FacialAndSkinCare></FacialAndSkinCare>
                    },
                    {
                        path: '/segment-4',
                        element: <ConferenceHall></ConferenceHall>
                    }
                ]
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    }
]);

export default Router;