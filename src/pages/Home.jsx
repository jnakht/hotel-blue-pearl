import { useContext } from "react";
import Slider from "./Slider";
import { AuthContext } from "../providers/AuthProvider";


const Home = () => {
    const {str, homeCards} = useContext(AuthContext);
    return (
        <div className="bg-background text-mText w-full ">

           <div className="bg-background text-mText h-[90vh]">
              <Slider></Slider>
              {str} {homeCards.length}
           </div>

        </div>
    );
};

export default Home;