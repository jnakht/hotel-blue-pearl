
const ReviewCard = ({review}) => {
    return (
        <div className="card bg-background2 w-96 shadow-sm">
            
            <div className="card-body">
                <h2 className="card-title">{review.title}</h2>
                <p>{review.review}</p>
                <div className="card-actions flex gap-4 items-center">
                    <img src={review.image} className="w-[50px] rounded-full" alt="" />
                    <div>
                         <p>{review.name}</p>
                         <p>{review.profession}</p>
                    </div>

                </div>
            </div>
        </div>

    );
};

export default ReviewCard;