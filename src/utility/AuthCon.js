import { useContext } from "react"
import { AuthContext } from "../providers/AuthProvider"




export const getAuth = () => {
    return useContext(AuthContext);
}