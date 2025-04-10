import SingleCard from "../components/SingleCard";
import { getAuth } from "../utility/AuthCon";

const ConferenceHall = () => {
    const {conferenceHallCards} = getAuth();
    return (
        <div className="text-white">
            {
                conferenceHallCards.map(card => <SingleCard card={card}></SingleCard>)
            }
        </div>
    );
};

export default ConferenceHall;