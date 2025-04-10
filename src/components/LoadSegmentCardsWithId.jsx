import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import SingleCard from './SingleCard';

const LoadSegmentCardsWithId = (id) => {
    const {luxuryRoomsCards,rooftopCards,facialAndSkinCareCards,conferenceHallCards} = useContext(AuthContext);
    let toLoadCards = [];
    if (id === '1') {
        toLoadCards = luxuryRoomsCards;
    }
    else if (id === '2') {
        toLoadCards = rooftopCards;
    }
    else if (id === '3') {
        toLoadCards = facialAndSkinCareCards;
    }
    else if (id === '4') {
        toLoadCards = conferenceHallCards;
    }
    return (
        <div className='max-w-5/6 mx-auto border-2 border-red-900'>
            {
                toLoadCards.map(card => <SingleCard card={card}></SingleCard>)
            }
        </div>
    );
};

export default LoadSegmentCardsWithId;