
import { getAuthContext } from "../utility/AuthCon";
import { useForm } from "react-hook-form"
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const Register = () => {
    const { createUser } = getAuthContext();
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        console.log(data)
        // create user with email and password
        createUser(data.email, data.password)
            .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                console.error(error);
            })
    }

    return (
        <div className="hero bg-background min-h-screen">
            <div className="hero-content flex-col ">

                <div className="card bg-background2 text-mText w-full ">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="card-body">
                            <fieldset className="fieldset">
                                <div className="  ">
                                    <div className="flex gap-2 flex-col mb-3">
                                    <h1 className="text-3xl font-bold ">Welcome Hotel Blue Pearl</h1>
                                    <p className="text-sm font-light text-[#828283]">Create a new account</p>
                                    </div>
                                    <button className="flex btn text-xl w-full bg-background text-mText border-none items-center mb-8 mt-10"><FcGoogle className="text-3xl" /> Continue With Google</button>
                                    <p className="text-[#828283] text-xl mb-8 ">---------------------or----------------------</p>
                                </div>
                                <label className="fieldset-label text-mText">Name</label>
                                <input  {...register("name", { required: true })} type="text" className="input border border-[#828283] w-full bg-background2" placeholder="What should i call you?" />
                                {errors.name && <span className='text-red-400'>This field is required</span>}


                                <label className="fieldset-label text-mText">Photo URL</label>
                                <input {...register("photoURL", { required: true })} type="text" className="input border border-[#828283] w-full bg-background2" placeholder="Photo URL" />
                                {errors.name && <span className='text-red-400'>This field is required</span>}

                                <label className="fieldset-label text-mText">Email</label>
                                <input {...register("email", { required: true })} type="email" className="input border border-[#828283] w-full bg-background2" placeholder="Your email" />
                                {errors.email && <span className='text-red-400'>This field is required</span>}


                                <label className="fieldset-label text-mText">Password</label>
                                <input {...register("password", { required: true })} type="password" className="input border border-[#828283] w-full bg-background2" placeholder="Password" />
                                {errors.password && <span className='text-red-400'>This field is required</span>}


                                <div><a className="link link-hover">Forgot password?</a></div>
                                <button className="btn bg-[#828283] border-none mt-4">Sign Up</button>
                            </fieldset>
                        </div>
                    </form>
                    <p className="text-center pb-4">Already have an account? Please <Link to='/login' className="text-blue-400 text-bold">Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Register;