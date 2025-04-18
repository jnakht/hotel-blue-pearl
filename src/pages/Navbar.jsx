import { NavLink } from "react-router-dom";
import { getAuthContext } from "../utility/AuthCon";

const Navbar = () => {
    const {user, logOut} = getAuthContext();
    const navLinks = <>
        <li><NavLink to='/'>Home</NavLink></li> 
        <li><NavLink to='/about'>About</NavLink></li> 
        <li><NavLink to='/login'>Login</NavLink></li> 
        <li><NavLink to='/register'>Register</NavLink></li> 
    
    </>
    
    const handleLogOut = () => {
        // logout
        logOut()
        .then()
        .catch()
    }
    return (
        <div className="navbar bg-background text-mText w-5/6 mx-auto shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="  lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-background rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {
                            navLinks
                        }
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">daisyUI</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                   {
                    navLinks
                   }
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <div>
                {user.email }
                    <button onClick={handleLogOut} className="btn-ghost ml-5">LogOut</button>
                    </div> : <button className="btn-ghost ml-5">LogIn</button>
                }
                
            </div>
        </div>
    );
};

export default Navbar;