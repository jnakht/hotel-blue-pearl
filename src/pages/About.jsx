import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import DescriptionWithTitleSection from "../components/DescriptionWithTitleSection";


const About = () => {
    useEffect(() => {
        document.title = "Hotel Blue Pearl | About Us"
    }, [])

    useEffect(() => {
        AOS.init({ duration: 1200 });
    }, []);
    return (
        <div className="max-w-5/6 mx-auto text-mText">

            <DescriptionWithTitleSection title='Explore Our Exclusive Categories'>
                <p>At Hotel Blue Pearl, we take pride in offering a diverse range of exclusive categories designed to suit every guest’s preference and occasion. Whether you're seeking luxurious accommodations, relaxing spa experiences, or breathtaking rooftop dining, each category is crafted with comfort, elegance, and unforgettable memories in mind.</p>
            </DescriptionWithTitleSection>
            {/* 1st div */}
            <div data-aos="fade-left" className="flex justify-end mt-[100px]">
                <div className="card bg-base-100 w-96 shadow-sm">
                    <figure>
                        <img
                            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Card Title</h2>
                        <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>



            {/* 2nd div */}
            <div data-aos="fade-up">
                <div className="card bg-base-100 w-96 shadow-sm">
                    <figure>
                        <img
                            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Card Title</h2>
                        <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* 3nd div */}
            <div data-aos="fade-up" className="flex justify-end">
                <div className="card bg-base-100 w-96 shadow-sm">
                    <figure>
                        <img
                            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Card Title</h2>
                        <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* 4th div */}
            <div data-aos="fade-up">
                <div className="card bg-base-100 w-96 shadow-sm">
                    <figure>
                        <img
                            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Card Title</h2>
                        <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default About;