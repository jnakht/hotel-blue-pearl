import { Outlet } from "react-router-dom";
import Navbar from "../pages/Navbar";
import Footer from "../components/Footer";

const Root = () => {
    return (
        <div className="bg-background">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>

        </div>
    );
};

export default Root;