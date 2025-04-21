import { useContext, useEffect, useState } from "react";
import Slider from "./Slider";
import { AuthContext } from "../providers/AuthProvider";
import HomepageCards from "./HomepageCards";
import { Outlet, useSearchParams } from "react-router-dom";
import DescriptionWithTitleSection from "../components/DescriptionWithTitleSection";
import Marquee from "react-fast-marquee";
import ReviewCard from "../components/ReviewCard";
import HeroCard from "../components/HeroCard";
import Footer from "../components/Footer";


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

            <div className="bg-background text-mText h-[90vh] ">
                <Slider></Slider>
                <DescriptionWithTitleSection title='Explore Our Exclusive Categories'>
                    <p>At Hotel Blue Pearl, we take pride in offering a diverse range of categories designed to suit every guest’s preference. Whether you're looking for luxury rooms, family suites, or rooftop dining experiences, each category promises comfort, elegance, and an unforgettable stay. Browse through our curated selections and discover the perfect option tailored just for you.</p>
                </DescriptionWithTitleSection>
                <HomepageCards></HomepageCards>



                <DescriptionWithTitleSection title='✨ Explore What Our Guests Are Saying'>
                    <p>At Hotel Blue Pearl, we believe every guest’s story matters. From cozy stays in our luxury rooms to memorable evenings at the rooftop restaurant, our guests share experiences filled with warmth, comfort, and unforgettable moments. Browse through their heartfelt reviews and discover why Hotel Blue Pearl is a favorite destination for travelers, foodies, and relaxation seekers alike.</p>
                </DescriptionWithTitleSection>

                <Marquee pauseOnHover='true' className="h-[500px] flex mt-[46px] ">
                    {
                        reviews.map(review => <ReviewCard review={review}></ReviewCard>)
                    }
                </Marquee>


                <div className="max-w-5/6 mx-auto mb-24">
                    <HeroCard></HeroCard>
                </div>

               

            </div>

        </div>
    );
};

export default Home;