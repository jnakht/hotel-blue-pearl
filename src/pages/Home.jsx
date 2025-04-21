import { useContext, useEffect, useState } from "react";
import Slider from "./Slider";
import { AuthContext } from "../providers/AuthProvider";
import HomepageCards from "./HomepageCards";
import { Outlet, useSearchParams } from "react-router-dom";
import DescriptionWithTitleSection from "../components/DescriptionWithTitleSection";
import Marquee from "react-fast-marquee";
import ReviewCard from "../components/ReviewCard";

const Home = () => {
    const { str, homeCards } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('/Reviews.json')
        .then(res => res.json())
        .then(data => setReviews(data))
    } ,[])
    return (
        <div className="bg-background text-mText w-full ">

            <div className="bg-background text-mText h-[90vh]">
                <Slider></Slider>
                <DescriptionWithTitleSection title='Explore Our Exclusive Categories'>
                    <p>At Hotel Blue Pearl, we take pride in offering a diverse range of categories designed to suit every guest’s preference. Whether you're looking for luxury rooms, family suites, or rooftop dining experiences, each category promises comfort, elegance, and an unforgettable stay. Browse through our curated selections and discover the perfect option tailored just for you.</p>
                </DescriptionWithTitleSection>
                <HomepageCards></HomepageCards>


                <Marquee pauseOnHover='true' className="h-[500px]">
                    {
                        reviews.map(review => <ReviewCard review={review}></ReviewCard>)
                    }
                </Marquee>

            </div>

        </div>
    );
};

export default Home;