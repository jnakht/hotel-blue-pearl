
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div className="text-mText flex flex-col justify-center items-center h-[100vh] w-full">
            <h1>Oops!</h1>
            <h3>Sorry, an unexpected error has occured</h3>
            <h3 className="text-red-600">{error.statusText || error.message}</h3>
        </div>
    );
};

export default ErrorPage;