
const SingleCard = ({card}) => {
  const {
    id,
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
  } = card;
  // console.log('this is the imge link: ', image)
  return (
    <div className="card bg-background2  shadow-sm">
      <figure>
        <img
          className="w-full h-[320px]"
          src={image}
          alt="img not found" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{estate_title}</h2>
        <p>{short_description}</p>
        <div className="card-actions justify-start mt-4">
          <button className="">EXPLORE</button>
        </div>
      </div>
    </div>
  );
};

export default SingleCard;