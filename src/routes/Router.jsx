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
import DetailedViewOfCardbyID from "../components/DetailedViewOfCardbyID";
import LuxuryRoomsRoot from "../layouts/LuxuryRoomsRoot";


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
                        path: '/luxuryRooms',
                        element: <LuxuryRoomsRoot></LuxuryRoomsRoot>,
                        children: [
                            {   
                                path: '/luxuryRooms',
                                element: <LuxuryRooms></LuxuryRooms> 
                            },
                            {
                                path: '/luxuryRooms/details/:segment_id/:id',
                                element: <DetailedViewOfCardbyID></DetailedViewOfCardbyID>
                            }
                        ]
                    },
                    {
                        path: '/rooftopRestaurant',
                        element: <RooftopRestaurant></RooftopRestaurant>
                    },
                    {
                        path: '/facialAndSkinCare',
                        element: <FacialAndSkinCare></FacialAndSkinCare>
                    },
                    {
                        path: '/conferenceHall',
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