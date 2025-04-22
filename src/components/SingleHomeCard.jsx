import React, { useEffect } from 'react';
import { Link, Navigate, useLocation } from 'react-router-dom';

const SingleHomeCard = ({card}) => {
    const {image, title, description, id, segment_name} = card;
    const idNumber = parseInt(id);
    // console.log(idNumber)
    // console.log("this is segment name :", segment_name);
    const location = useLocation();


    
    return (
        <div  className={`card lg:card-side h-[527px] bg-background2 shadow-sm flex flex-col  ${idNumber % 2 === 0 && 'lg:flex-row-reverse'}`}>
        <figure className='w-full lg:w-[40%]'>
          <img
            
            src={image}
            alt="Album" />
        </figure>
        <div className="flex flex-col justify-center items-center lg:max-w-[60%] space-y-3 text-center">
          <h2  className="text-2xl  lg:text-3xl font-normal">{title}</h2>
          <p className='lg:max-w-[60%]'>{description}</p>
            <Link to={`/${segment_name}`} className="btn w-[200px]">Explore</Link>
            
        </div>
      </div>
    );
};

export default SingleHomeCard;