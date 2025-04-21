import { Outlet } from "react-router-dom";
import Navbar from "../pages/Navbar";
import Footer from "../components/Footer";
import {Helmet} from "react-helmet";
const Root = () => {
    return (
        <div className="bg-background">
            <Navbar></Navbar>
            <Outlet></Outlet>
            

        </div>
    );
};

export default Root;