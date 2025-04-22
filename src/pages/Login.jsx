import { useEffect } from "react";
import { getAuthContext } from "../utility/AuthCon";
import { useForm } from "react-hook-form"
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';

const Login = () => {
    const {logInUser, user} = getAuthContext();
    const navigate = useNavigate();
    const location = useLocation();
    const {
            register,
            handleSubmit,
            watch,
            formState: { errors },
        } = useForm()


    const onSubmit = (data) => {
        console.log(data)
        // create user with email and password
        logInUser(data.email, data.password)
        .then(result => {
            console.log(result.user);
            // toast.error("Login Successful");
        })
        .catch(error => {
            console.error(error);
            toast.error(`${error}`);
        })
    }
    useEffect( () => {
        if (user) {
            navigate(location?.state ? location.state : '/');
        }
    } ,[user])
    useEffect(() => {
        document.title = "Hotel Blue Pearl | Login";
    } ,[])
    return (
        <div className="hero bg-background min-h-screen ">
            <div className="hero-content flex-col ">
                <div className="  ">
                    <h1 className="text-5xl font-bold text-mText">Login Now</h1>
                   

                </div>
                <div className="card bg-background2 text-mText w-96 max-w-sm shrink-0 shadow-2xl min-h-[400px] space-y-4">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="card-body">
                            <fieldset className="fieldset space-y-4">
                                

                                <label className="fieldset-label text-mText">Email</label>
                                <input {...register("email", { required: true })} type="email"  className="input bg-background" placeholder="Your email" />
                                {errors.email && <span>This field is required</span>}


                                <label className="fieldset-label text-mText">Password</label>
                                <input {...register("password", { required: true })} type="password"  className="input bg-background" placeholder="Password" />
                                {errors.password && <span>This field is required</span>}


                                <div><a className="link link-hover">Forgot password?</a></div>
                                <button className="btn btn-neutral mt-4 bg-[#828283]">Sign In</button>
                            </fieldset>
                        </div>
                    </form>
                    <div className="text-center pb-4">
                    <p>New Here? Please <Link to='/register' className="text-blue-400 font-bold text-center ">Register</Link></p>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Login;