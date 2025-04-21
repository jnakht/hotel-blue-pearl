import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

const HomeRoot = () => {
    return (
        <div>
            <Outlet></Outlet>
           
        </div>
    );
};

export default HomeRoot;