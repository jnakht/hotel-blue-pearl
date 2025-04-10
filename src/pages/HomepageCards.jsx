import SingleHomeCard from "../components/SingleHomeCard";
import { getAuth } from "../utility/AuthCon";

const HomepageCards = () => {
    const {homeCards} = getAuth();
    return (
        <div className="max-w-5/6 mx-auto mt-20 flex flex-col gap-20 bg-background text-mText">
            {
                homeCards.map(card => <SingleHomeCard card={card}></SingleHomeCard>)
            }
        </div>
    );
};

export default HomepageCards;