import { useEffect, useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import DescriptionWithTitleSection from "../components/DescriptionWithTitleSection";
import AboutUsCard from "../components/AboutUsCard";


const About = () => {
    const [cards, setCards] = useState([]);
    useEffect(() => {
        document.title = "Hotel Blue Pearl | About Us"
    }, [])

    useEffect(() => {
        AOS.init({ duration: 1200 });
    }, []);
    useEffect(() => {
        fetch('/AboutUs.json')
        .then(res => res.json())
        .then(data => {
            setCards(data);
            console.log(data);
            console.log(data[0])
            
        })
        
    } ,[])
    useEffect(() => {
        console.log(cards);
    } ,[cards])
    return (
        <div className="max-w-5/6 mx-auto text-mText">

            <DescriptionWithTitleSection title='Explore Our Exclusive Categories'>
                <p>At Hotel Blue Pearl, we take pride in offering a diverse range of exclusive categories designed to suit every guest’s preference and occasion. Whether you're seeking luxurious accommodations, relaxing spa experiences, or breathtaking rooftop dining, each category is crafted with comfort, elegance, and unforgettable memories in mind.</p>
            </DescriptionWithTitleSection>
            {/* 1st div */}
            <div data-aos="fade-left" className="flex justify-end mt-[100px]">
                <AboutUsCard about={cards[0]}></AboutUsCard>
            </div>



            {/* 2nd div */}
            <div data-aos="fade-up">
            <AboutUsCard about={cards[1]}></AboutUsCard>
            </div>
            {/* 3nd div */}
            <div data-aos="fade-up" className="flex justify-end">
            <AboutUsCard about={cards[2]}></AboutUsCard>
            </div>
            {/* 4th div */}
            <div data-aos="fade-up">
            <AboutUsCard about={cards[3]}></AboutUsCard>
            </div>


        </div>
    );
};

export default About;