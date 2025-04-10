import SingleCard from "../components/SingleCard";
import { getAuth } from "../utility/AuthCon";

const LuxuryRooms = () => {
    const {luxuryRoomsCards} = getAuth();
    return (
        <div className="text-white">
            {
                luxuryRoomsCards.map(card => <SingleCard card={card}></SingleCard>)
            }
        </div>
    );
};

export default LuxuryRooms;