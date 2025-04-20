import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import { GoogleAuthProvider } from "firebase/auth";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
        const [user, setUser] = useState(null);
        const [loading, setLoading] = useState(true);
        const [homeCards, setHomeCards] = useState([]);
        const [luxuryRoomsCards, setLuxuryRoomsCards] = useState([]);
        const [rooftopCards, setRooftopCards] = useState([]);
        const [facialAndSkinCareCards, setFacialAndSkinCareCards] = useState([]);
        const [conferenceHallCards, setconferenceHallCards] = useState([]);
        const str = 'jisan';
        const googleProvider = new GoogleAuthProvider();
        useEffect(() => {
                setLoading(true);
                fetch('ServiceCategory.json')
                        .then(res => res.json())
                        .then(data => {
                                setHomeCards(data);
                                // setLoading(false);    
                        })
                        
        }, [])
        useEffect(() => {
                setLoading(true);
                fetch('LuxuryRooms.json')
                        .then(res => res.json())
                        .then(data => {
                                setLuxuryRoomsCards(data);
                                // setLoading(false);
                        });
                        
        }, [])
        useEffect(() => {
                setLoading(true);
                fetch('RooftopRestaurant.json')
                        .then(res => res.json())
                        .then(data => {
                                setRooftopCards(data);
                                // setLoading(false);
                        });
                        
        }, [])
        useEffect(() => {
                setLoading(true);
                fetch('FacialAndSkinCare.json')
                        .then(res => res.json())
                        .then(data => {
                                setFacialAndSkinCareCards(data);
                                // setLoading(false);
                        });
                        
                        
        }, [])
        useEffect(() => {
                setLoading(true);
                fetch('ConferenceHall.json')
                        .then(res => res.json())
                        .then(data => {
                                setconferenceHallCards(data);
                                setLoading(false);
                        })
                        
                       
        }, [])

        

        // create user  with email and password
        const createUser = (email, password) => {
                
                return createUserWithEmailAndPassword(auth, email, password);
        }
        // login with email and password
        const logInUser = (email, password) => {
                
                return signInWithEmailAndPassword(auth, email, password);
        }
        // sign in with google
        const signInWithGoogle = () => {
                return signInWithPopup(auth, googleProvider);
        }
        // logOUt 
        const logOut = () => {
               return signOut(auth);
        }
        // current user
        useEffect(() => {
                const unSubscribe = onAuthStateChanged(auth, currentUser => {
                        setUser(currentUser);
                        setLoading(false);
                })
                return () => unSubscribe();
        }, [])
        const authInfo = {
                user,
                str,
                homeCards,
                luxuryRoomsCards,
                rooftopCards,
                facialAndSkinCareCards,
                conferenceHallCards,
                createUser,
                logInUser,
                signInWithGoogle,
                logOut,
                loading,
        };
        return (
                <AuthContext.Provider value={authInfo}>
                        {children}
                </AuthContext.Provider>
        );
};

export default AuthProvider;