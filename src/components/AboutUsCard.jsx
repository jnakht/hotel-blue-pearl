

const AboutUsCard = ({about}) => {
    console.log('about us card on about page', about);
    return (
        <div className="card bg-background2 w-80 shadow-sm mx-4 h-[450px]">
            
            <div className="card-body">
                <h2 className="text-lg font-medium mt-4">{about?.title}</h2>
                <p className="mt-8 text-[#9999A2]">{about?.description}</p>
                
            </div>
        </div>
    );
};

export default AboutUsCard;