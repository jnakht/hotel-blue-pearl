import '../utility/HeroCard.css'
import { GoArrowUpRight } from "react-icons/go";

const HeroCard = () => {
  
  return (
    <div className="card lg:card-side lg:h-[640px] bg-background2 shadow-sm lg:mt-[76px]">
      <figure className="bg-[#C4B5FD] lg:w-[45%]  floating-container">
        <img
          className='hero-card-img floating-laptop'
          src="https://cdn.getmerlin.in/cms/image_ce68ee704e.webp"
          alt="Album" />
      </figure>
      <div className="lg:max-w-[45%] flex flex-col  mx-auto mt-8 lg:mt-30 pl-4 lg:pl-0">
        <h2 className="text-2xl md:text-3xl lg:text-5xl mb-4 font-medium">Stay Connected, Wherever You Are</h2>
        <p className='text-2xl text-[#A1A1AA] font-light '>Access all the comforts of Hotel Blue Pearl from any device. Browse room options, manage your bookings, and explore exclusive offers — all with a seamless experience across your phone, tablet, and computer.</p>
        <button className='btn max-w-[60%] md:max-w-[60%] lg:max-w-[50%] mt-5 text-base  lg:text-lg font-semibold' onClick={() => document.getElementById('my_modal_3').showModal()}>Book Now <GoArrowUpRight className='text-3xl font-bold' /></button>


        {/* dropdown modal */}
        {/* You can open the modal using document.getElementById('ID').showModal() method */}
        {/* <button className="btn" onClick={() => document.getElementById('my_modal_3').showModal()}>open modal</button> */}
        <dialog id="my_modal_3" className="modal bg-background ">
          <div className="modal-box bg-background h-[40vh] space-y-4">
            {/* <form   method="dialog bg-background"> */}
              {/* if there is a button in form, it will close the modal */}
              <button onClick={() => document.getElementById('my_modal_3').close()} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            {/* </form> */}
            <h3 className="font-bold text-lg">Hello There!</h3>
            <p className="py-4">Please contact us for booking: </p>
            <p><span>Phone: </span>+8801912283044</p>
            <p><span>Email: </span>hotel.blue_pearl@gmail.com</p> 
            <p><span>Facebook: </span>https://web.facebook.com/hotel_blue_pearl</p> 

          </div>
        </dialog>
      </div>

    </div>
  );
};

export default HeroCard;