import SingleCard from "../components/SingleCard";
import { getAuth } from "../utility/AuthCon";

const RooftopRestaurant = () => {
    const {rooftopCards} = getAuth();
    return (
        <div className="text-white">
            {
                rooftopCards.map(card => <SingleCard card={card}></SingleCard>)
            }
        </div>
    );
};

export default RooftopRestaurant;