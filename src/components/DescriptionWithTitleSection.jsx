
const DescriptionWithTitleSection = ({title, children}) => {
    return (
        <div className="text-center max-w-[90%] md:max-w-[50%] mx-auto mt-[100px] ">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">{title}</h3>
            <p className="text-base font-medium">{children}</p>
        </div>
    );
};

export default DescriptionWithTitleSection;