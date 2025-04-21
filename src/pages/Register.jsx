
import { useEffect } from "react";
import { getAuthContext } from "../utility/AuthCon";
import { useForm } from "react-hook-form"
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';

const Register = () => {
    useEffect(() => {
        document.title = "Hotel Blue Pearl | Register";
    } ,[])
    const { createUser, signInWithGoogle, user, updateUserProfile } = getAuthContext();
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()
    const navigate = useNavigate();
    const upperCaseRE = /^(?=.*[A-Z]).*$/;
    const lowerCaseRE = /^(?=.*[a-z]).*$/;
    const onSubmit = (data) => {
        console.log(data)
        // create user with email and password
        if (data.password.length < 6) {
            toast.error('Password Must Be At Least 6 Characters Long');
            return;
        }
        else if (!upperCaseRE.test(data.password)) {
            toast.error("Password Must Contain at least One Uppercase Letter");
            return;
        }
        else if (!lowerCaseRE.test(data.password)) {
            toast.error('Password Must Contain at Least One Lowercase Letter');
            return;
        }
        else {
            toast.success("Successfully Registered");
        }
        createUser(data.email, data.password)
            .then(result => {
               
                console.log(result.user);
                // update user profile
                updateUserProfile(data.name, data.photoURL)
                .then(() => {
                    console.log('successfully updated')
                })
                .catch(error => console.error(error))
            })
            .catch(error => {
                console.error(error);
            })
    }

    const handleGoogleRegister = () => {
        signInWithGoogle()
            .then(result => console.log(result.user))
            .catch(error => console.error(error))
    }
    useEffect(() => {
        if (user) {
            navigate('/');
        }
    }, [user])

    return (
        <div className="hero bg-background min-h-screen">
            <div className="hero-content flex-col ">

                <div className="card bg-background2 text-mText w-full ">
                    <div className="flex gap-2 flex-col mb-3 text-mText pt-6">
                        <h1 className="text-3xl font-bold ">Welcome Hotel Blue Pearl</h1>
                        <p className="text-sm font-light text-[#828283]">Create a new account</p>
                    </div>
                    <button onClick={handleGoogleRegister} className="flex btn text-xl w-full bg-background text-mText border-none items-center mt-4"><FcGoogle className="text-3xl" /> Continue With Google</button>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="card-body">
                            <fieldset className="fieldset">
                                <div className="  ">


                                    <p className="text-[#828283] text-xl mb-8 ">---------------------or----------------------</p>
                                </div>
                                <label className="fieldset-label text-mText">Name</label>
                                <input  {...register("name", { required: true })} type="text" className="input  w-full bg-background" placeholder="What should i call you?" />
                                {errors.name && <span className='text-red-400'>This field is required</span>}


                                <label className="fieldset-label text-mText">Photo URL</label>
                                <input {...register("photoURL", { required: true })} type="text" className="input  w-full bg-background" placeholder="Photo URL" />
                                {errors.photoURL && <span className='text-red-400'>This field is required</span>}

                                <label className="fieldset-label text-mText">Email</label>
                                <input {...register("email", { required: true })} type="email" className="input  w-full bg-background" placeholder="Your email" />
                                {errors.email && <span className='text-red-400'>This field is required</span>}


                                <label className="fieldset-label text-mText">Password</label>
                                <input {...register("password", { required: true })} type="password" className="input  w-full bg-background" placeholder="Password" />
                                {errors.password && <span className='text-red-400'>This field is required</span>}


                                <div><a className="link link-hover">Forgot password?</a></div>
                                <button className="btn bg-[#828283] border-none mt-4">Sign Up</button>
                            </fieldset>
                        </div>
                    </form>
                    <p className="text-center pb-4">Already have an account? Please <Link to='/login' className="text-blue-400 text-bold">Login</Link></p>
                </div>
            </div>
            {/* toast container */}
            <ToastContainer />
        </div>
    );
};

export default Register;