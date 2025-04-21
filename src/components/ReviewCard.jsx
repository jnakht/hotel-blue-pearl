
const ReviewCard = ({review}) => {
    return (
        <div className="card bg-background2 w-80 shadow-sm mx-4 h-[450px]">
            
            <div className="card-body">
                <h2 className="text-lg font-medium mt-4">{review.title}</h2>
                <p className="mt-8 text-[#9999A2]">{review.review}</p>
                <div className="card-actions flex gap-4 items-center">
                    <img src={review.image} className="w-[50px] rounded-full" alt="" />
                    <div>
                         <p className="font-bold">{review.name}</p>
                         <p className="text-[#9999A2]">{review.profession}</p>
                    </div>

                </div>
            </div>
        </div>

    );
};

export default ReviewCard;