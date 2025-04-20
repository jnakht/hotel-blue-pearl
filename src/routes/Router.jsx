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

import LuxuryRoomsRoot from "../layouts/LuxuryRoomsRoot";
import RoofTopRoot from "../layouts/RoofTopRoot";
import FacialAndSkinCareRoot from "../layouts/FacialAndSkinCareRoot";
import ConferenceHallRoot from "../layouts/ConferenceHallRoot";
import PrivateRoute from "./PrivateRoute";


import DetailedOfLuxuryRoomsCard from "../components/DetailedOfLuxuryRoomsCard";
import CardDetailedRoot from "../layouts/CardDetailedRoot";


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
                                // path: '/luxuryRooms',
                                index: true,
                                element: <LuxuryRooms></LuxuryRooms>,
                                
                            },
                            {
                                path: 'details/:id',
                                element: <CardDetailedRoot></CardDetailedRoot>,
                                children: [
                                     {
                                         // path: '/luxuryRooms/details/:id',
                                         index: true,
                                         element: <PrivateRoute><DetailedOfLuxuryRoomsCard></DetailedOfLuxuryRoomsCard></PrivateRoute>
                                     }
                                ]
                                 
                             }

                        ]
                    },
                    {
                        path: '/rooftopRestaurant',
                        element: <RoofTopRoot></RoofTopRoot>,
                        children: [
                            {
                                // path: '/rooftopRestaurant',
                                index: true,
                                element: <RooftopRestaurant></RooftopRestaurant>
                            }
                        ]
                    },
                    {
                        path: '/facialAndSkinCare',
                        element: <FacialAndSkinCareRoot></FacialAndSkinCareRoot>,
                        children: [
                            {
                                // path: '/facialAndSkinCare',
                                index: true,
                                element: <FacialAndSkinCare></FacialAndSkinCare>
                            }
                        ]
                    },
                    {
                        path: '/conferenceHall',
                        element: <ConferenceHallRoot></ConferenceHallRoot>,
                        children: [
                            {
                                // path: '/conferenceHall',
                                index: true,
                                element: <ConferenceHall></ConferenceHall>
                            }
                        ]
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