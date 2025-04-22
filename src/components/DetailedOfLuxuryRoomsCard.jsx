import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAuthContext } from "../utility/AuthCon";

const DetailedOfLuxuryRoomsCard = () => {
    const [cards, setCards] = useState([]);
    const [singleCard, setSingleCard] = useState([]);
    const {id} = useParams();
   
    useEffect( () => {
        fetch('/LuxuryRooms.json')
        .then(res => res.json())
        .then(data => setCards(data))
        
    } ,[])
    useEffect( () => {
        const card = cards.find(data => data.id == id);
        setSingleCard(card);
        
    },[cards, id])


    return (
        <div className="text-mText bg-background max-w-5/6 mx-auto">
            <p className="text-3xl mb-4">{singleCard?.estate_title}</p>
            <img className="rounded-xl" src={singleCard?.image} alt="" /> 
           <p className="mt-8 text-lg"> {singleCard?.long_description} </p>  
            <p className="mt-4"><span className="text-xl font-bold">Price: </span> {singleCard?.price}</p>   
          <p className="mt-1"><span className="text-xl font-bold">Status: </span>  {singleCard?.status}   </p>
           <p className="mt-1"><span className="text-xl font-bold">Area: </span> {singleCard?.area}  </p> 
           <p className="mt-1"><span className="text-xl font-bold">Location: </span> {singleCard?.location} </p>  
           <p className="mt-1"><span className="text-xl font-bold">Facilities: </span> </p>  
           {
            singleCard?.facilities?.map(a => <span className="ml-4">#{a}</span>)
           }
        </div>
    );
};

export default DetailedOfLuxuryRoomsCard;