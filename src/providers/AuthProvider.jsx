import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [homeCards, setHomeCards] = useState([]);
    const str = 'jisan';
    useEffect( () => {
            fetch('ServiceCategory.json')
            .then(res => res.json())
            .then(data => setHomeCards(data))
    },[])
    const authInfo = {
        user,
        str,
        homeCards,
    };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;