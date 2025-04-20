import { Navigate, useLocation } from "react-router-dom";
import { getAuthContext } from "../utility/AuthCon";

const PrivateRoute = ({children}) => {
    const {user, loading, dataLoading} = getAuthContext();
    console.log('loading......', loading);
    console.log('data loading......', dataLoading);
    const location = useLocation();
    if (loading) {
        return <div className="h-[100vh] w-full text-mText flex justify-center items-center text-4xl"><p>Loading...</p></div>
    }
    if (user) {
        return children;
    }

    return <Navigate state={location.pathname} to='/login'></Navigate>
};

export default PrivateRoute;