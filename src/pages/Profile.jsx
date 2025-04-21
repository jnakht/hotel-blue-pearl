import { createRef, useEffect, useRef, useState } from "react";
import { getAuthContext } from "../utility/AuthCon";
import { FaRegEdit } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
const Profile = () => {
    const {user, updateUserName, updateUserPhotoURL} = getAuthContext();
    const [isEditingName, setIsEditingName] = useState(false);
    const [isEditingPhotoURL, setIsEditingPhotoURL] = useState(false);
    const nameRef = useRef();
    const photoURLRef = useRef();
    const handleUpdateName = () => {
        console.log('this is new username: ', nameRef.current.value);
        updateUserName(nameRef.current.value)
        .then()
        .catch()
        toast.success('Name Updated Successfully');
    }
    const handleUpdatePhotoURL = () => {
        console.log('this is new username: ', nameRef.current.value);
        updateUserPhotoURL(photoURLRef.current.value)
        .then()
        .catch()
        toast.success('Photo Updated Successfully')
    }
    useEffect( () => {
        photoURLRef.current.focus();
        nameRef.current.focus();
    },[isEditingName, isEditingPhotoURL])
    return (
        <div className="text-mText max-w-5/6 bg-background mx-auto mt-[100px]">
            <div className="w-[100px] h-[100px] mx-auto bg-background">
                <img className="rounded-4xl" src={user?.photoURL} alt="" />
            </div>
            <div className=""> 
                <label className="label">
                    Name
                </label>
                <br />
                <div className=" bg-background flex gap-4 items-center mt-2 ">
                    <input  ref={nameRef} className="bg-background2 input" type="text" name="" id="" defaultValue={user?.displayName}  disabled={!isEditingName}  />

                    {
                        !isEditingName && <button onClick={() => setIsEditingName(!isEditingName)} className="text-2xl"><FaRegEdit /></button>
                    }
                    {
                        isEditingName &&  <button onClick={() => {
                            setIsEditingName(!isEditingName);
                            handleUpdateName();
                        }} className=""><FaCheck /></button>

                    }
                </div>
            </div>
            < > 
                <label className="label mt-4 mb-2">
                    Photo URL
                </label>
                <br />
                <div className="flex gap-4 items-center">
                    <input ref={photoURLRef} className="input bg-background2 " type="text" name="" id="" defaultValue={user?.photoURL}  disabled={!isEditingPhotoURL}  />

                    {
                        !isEditingPhotoURL && <button onClick={() => setIsEditingPhotoURL(!isEditingPhotoURL)} className="text-2xl"><FaRegEdit /></button>
                    }
                    {
                        isEditingPhotoURL &&  <button onClick={() => {
                            setIsEditingPhotoURL(!isEditingPhotoURL);
                            handleUpdatePhotoURL();
                        }} className=""><FaCheck /></button>

                    }
                </div>
            </>
            <ToastContainer />
        </div>
    );
};

export default Profile;