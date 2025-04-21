import { useEffect } from "react";

const About = () => {
    useEffect(() => {
        document.title = "Hotel Blue Pearl | About Us"
    } ,[])
    return (
        <div>
            This is about us
            
        </div>
    );
};

export default About;