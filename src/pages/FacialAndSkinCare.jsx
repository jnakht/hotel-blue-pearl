import SingleCard from "../components/SingleCard";
import { getAuth } from "../utility/AuthCon";

const FacialAndSkinCare = () => {
    const {facialAndSkinCareCards} = getAuth();
    return (
        <div className="text-white max-w-5/6 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {
                facialAndSkinCareCards.map(card => <SingleCard card={card}></SingleCard>)
            }
        </div>
    );
};

export default FacialAndSkinCare;