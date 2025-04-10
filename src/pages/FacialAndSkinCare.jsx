import SingleCard from "../components/SingleCard";
import { getAuth } from "../utility/AuthCon";

const FacialAndSkinCare = () => {
    const {facialAndSkinCareCards} = getAuth();
    return (
        <div className="text-white">
            {
                facialAndSkinCareCards.map(card => <SingleCard card={card}></SingleCard>)
            }
        </div>
    );
};

export default FacialAndSkinCare;