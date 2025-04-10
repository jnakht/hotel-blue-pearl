import { useContext } from "react";
import Slider from "./Slider";
import { AuthContext } from "../providers/AuthProvider";
import HomepageCards from "./HomepageCards";


const Home = () => {
    const {str, homeCards} = useContext(AuthContext);
    return (
        <div className="bg-background text-mText w-full ">

           <div className="bg-background text-mText h-[90vh]">
              <Slider></Slider>
              <HomepageCards></HomepageCards>
           </div>

        </div>
    );
};

export default Home;