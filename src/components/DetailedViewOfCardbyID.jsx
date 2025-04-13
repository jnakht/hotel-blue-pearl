import { useParams } from "react-router-dom";
import { getAuthContext } from "../utility/AuthCon";

const DetailedViewOfCardbyID = () => {
    const params = useParams();
    const {segment_id, id} = params;
    // console.log('this is params: ', params)
    const {luxuryRoomsCards, rooftopCards, facialAndSkinCareCards,conferenceHallCards} = getAuthContext();
    let allData = {};
    if (segment_id === '1') {
        allData = luxuryRoomsCards;
        // console.log('lux',  luxuryRoomsCards);
    }
    else if (segment_id === '2') {
        allData = rooftopCards;
        // console.log('roof');
    }
    else if (segment_id === '3') {
        allData = facialAndSkinCareCards;
        // console.log('face');
    }
    else if (segment_id === '4') {
        allData = conferenceHallCards;
        // console.log('con');
    }
    // console.log('all data: ', allData)
    const cardOfId = allData.find(data => data.id == params.id);
    // console.log('this is the card', cardOfId);
    

    const {
        estate_title,
        segment_name,
        short_description,
        long_description,
        description,
        image,
        price,
        status,
        area,
        location,
        facilities,
        button_text
      } = cardOfId;



    return (
        <div className="text-mText max-w-5/6 mx-auto">
            {cardOfId.estate_title}
            <img src={image} alt="" />
            <p>Description: {long_description}</p>
            <p>Price: {price}</p>
            <p>Status: {status}</p>
            <p>Area: {area}</p>
            <p>Location: {location}</p>
            <p>Facilities: {facilities}</p>
            
        </div>
    );
};

export default DetailedViewOfCardbyID;