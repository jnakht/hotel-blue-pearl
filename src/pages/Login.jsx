import { useEffect } from "react";
import { getAuthContext } from "../utility/AuthCon";
import { useForm } from "react-hook-form"
import { useLocation, useNavigate } from "react-router-dom";
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
        })
        .catch(error => {
            console.error(error);
        })
    }
    useEffect( () => {
        if (user) {
            navigate(location?.state ? location.state : '/');
        }
    } ,[user])
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col ">
                <div className="  ">
                    <h1 className="text-5xl font-bold">Login NOw</h1>
                   

                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="card-body">
                            <fieldset className="fieldset">
                                

                                <label className="fieldset-label">Email</label>
                                <input {...register("email", { required: true })} type="email"  className="input" placeholder="Your email" />
                                {errors.email && <span>This field is required</span>}


                                <label className="fieldset-label">Password</label>
                                <input {...register("password", { required: true })} type="password"  className="input" placeholder="Password" />
                                {errors.password && <span>This field is required</span>}


                                <div><a className="link link-hover">Forgot password?</a></div>
                                <button className="btn btn-neutral mt-4">Sign In</button>
                            </fieldset>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;