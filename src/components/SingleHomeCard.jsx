import React from 'react';

const SingleHomeCard = ({card}) => {
    const {image, title, description} = card;
    return (
        <div className="card lg:card-side h-[527px] bg-background2 shadow-sm">
        <figure className='w-[40%]'>
          <img
            
            src={image}
            alt="Album" />
        </figure>
        <div className="flex flex-col justify-center items-center max-w-[60%] space-y-3 text-center">
          <h2 className="text-3xl font-normal">{title}</h2>
          <p className='max-w-[60%]'>{description}</p>
            <button className="btn w-[200px]">Explore</button>
        </div>
      </div>
    );
};

export default SingleHomeCard;