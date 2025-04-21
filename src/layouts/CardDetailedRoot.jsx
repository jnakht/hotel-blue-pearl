import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

const CardDetailedRoot = () => {
    return (
        <div>
            <Outlet></Outlet>
           
        </div>
    );
};

export default CardDetailedRoot;