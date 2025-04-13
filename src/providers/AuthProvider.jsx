import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
        const [user, setUser] = useState(null);
        const [homeCards, setHomeCards] = useState([]);
        const [luxuryRoomsCards, setLuxuryRoomsCards] = useState([]);
        const [rooftopCards, setRooftopCards] = useState([]);
        const [facialAndSkinCareCards, setFacialAndSkinCareCards] = useState([]);
        const [conferenceHallCards, setconferenceHallCards] = useState([]);
        const str = 'jisan';
        useEffect(() => {
                fetch('ServiceCategory.json')
                        .then(res => res.json())
                        .then(data => setHomeCards(data))
        }, [])
        useEffect(() => {
                fetch('LuxuryRooms.json')
                        .then(res => res.json())
                        .then(data => setLuxuryRoomsCards(data))
        }, [])
        useEffect(() => {
                fetch('RooftopRestaurant.json')
                        .then(res => res.json())
                        .then(data => setRooftopCards(data))
        }, [])
        useEffect(() => {
                fetch('FacialAndSkinCare.json')
                        .then(res => res.json())
                        .then(data => setFacialAndSkinCareCards(data))
        }, [])
        useEffect(() => {
                fetch('ConferenceHall.json')
                        .then(res => res.json())
                        .then(data => setconferenceHallCards(data))
        }, [])

        // register with email and password
        const createUser = (email, password) => {
                return createUserWithEmailAndPassword(auth, email, password);
        }
        // current user
        useEffect(() => {
                const unSubscribe = onAuthStateChanged(auth, currentUser => {
                        setUser(currentUser);
                })
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
        };
        return (
                <AuthContext.Provider value={authInfo}>
                        {children}
                </AuthContext.Provider>
        );
};

export default AuthProvider;