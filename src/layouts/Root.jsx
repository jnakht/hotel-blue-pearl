import { Outlet } from "react-router-dom";
import Navbar from "../pages/Navbar";

const Root = () => {
    return (
        <div className="bg-background">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;