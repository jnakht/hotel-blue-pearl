import { useParams } from "react-router-dom";

const DetailedViewOfCardbyID = () => {
    const params = useParams();
    console.log('this is params: ', params)
    return (
        <div className="text-mText">
            this is details of id: {params.id}
        </div>
    );
};

export default DetailedViewOfCardbyID;