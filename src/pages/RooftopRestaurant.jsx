import SingleCard from "../components/SingleCard";
import { getAuth } from "../utility/AuthCon";

const RooftopRestaurant = () => {
    const {rooftopCards} = getAuth();
    return (
        <div className="text-white max-w-5/6 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {
                rooftopCards.map(card => <SingleCard card={card}></SingleCard>)
            }
        </div>
    );
};

export default RooftopRestaurant;