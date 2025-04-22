import { Outlet } from "react-router-dom";
import Navbar from "../pages/Navbar";
import Footer from "../components/Footer";
import {Helmet} from "react-helmet";
const Root = () => {
    return (
        <div className="bg-background">
            <div className="">
            <Navbar></Navbar>
            </div>
            <Outlet></Outlet>
            <div className="mt-[100px]">
            <Footer></Footer>
            </div>

        </div>
    );
};

export default Root;