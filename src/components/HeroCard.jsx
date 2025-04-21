import '../utility/HeroCard.css'
import { GoArrowUpRight } from "react-icons/go";

const HeroCard = () => {
    return (
        <div className="card lg:card-side h-[640px] bg-background2 shadow-sm mt-[76px]">
        <figure className="bg-[#C4B5FD] w-[35%] flex justify-center items-center floating-container">
          <img
            className='hero-card-img floating-laptop'
            src="https://cdn.getmerlin.in/cms/image_ce68ee704e.webp"
            alt="Album" />
        </figure>
        <div className="max-w-[45%] flex flex-col  mx-auto mt-30">
          <h2 className="text-5xl mb-4 font-medium">Stay Connected, Wherever You Are</h2>
          <p className='text-2xl text-[#A1A1AA] font-light '>Access all the comforts of Hotel Blue Pearl from any device. Browse room options, manage your bookings, and explore exclusive offers — all with a seamless experience across your phone, tablet, and computer.</p>
          <button className='btn max-w-[30%] mt-5 text-lg font-semibold'>Book Now <GoArrowUpRight className='text-3xl font-bold' /></button>
        </div>
       
      </div>
    );
};

export default HeroCard;