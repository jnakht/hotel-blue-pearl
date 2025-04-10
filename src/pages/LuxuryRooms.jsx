import LoadSegmentCardsWithId from "../components/LoadSegmentCardsWithId";
import SingleCard from "../components/SingleCard";
import { getAuth } from "../utility/AuthCon";

const LuxuryRooms = () => {
    const {luxuryRoomsCards} = getAuth();
    console.log('number of luxury rooms: ', luxuryRoomsCards.length)
    return (
        <div className="text-white max-w-5/6 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {
                luxuryRoomsCards.map(card => <SingleCard card={card}></SingleCard>)
            }
        </div>
        // <LoadSegmentCardsWithId id={'1'}></LoadSegmentCardsWithId>
    );
};

export default LuxuryRooms;