import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const DetailedOfFacialAndSkinCareCard = () => {
    const [cards, setCards] = useState([]);
    const [singleCard, setSingleCard] = useState([]);
    const {id} = useParams();
   
    useEffect( () => {
        fetch('/FacialAndSkinCare.json')
        .then(res => res.json())
        .then(data => setCards(data))
        
    } ,[])
    useEffect( () => {
        const card = cards.find(data => data.id == id);
        setSingleCard(card);
        
    },[cards, id])


    return (
        <div className="text-mText bg-background">
            <p>{singleCard?.estate_title}</p>
            <img src={singleCard?.image} alt="" /> 
           <p> {singleCard?.long_description} </p>  
            <p>{singleCard?.price}</p>   
          <p>  {singleCard?.status}   </p>
           <p> {singleCard?.area}  </p> 
           <p> {singleCard?.location} </p>  
           <p>Facilities: </p>  
           {
            singleCard?.facilities?.map(a => <p>{a}</p>)
           }
        </div>
    );
};

export default DetailedOfFacialAndSkinCareCard;