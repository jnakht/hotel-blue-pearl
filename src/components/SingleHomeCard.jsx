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
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>
            <button className="btn btn-primary">Listen</button>
        </div>
      </div>
    );
};

export default SingleHomeCard;