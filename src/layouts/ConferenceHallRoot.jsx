import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

const ConferenceHallRoot = () => {
    return (
        <div>
            <Outlet></Outlet>
            
        </div>
    );
};

export default ConferenceHallRoot;