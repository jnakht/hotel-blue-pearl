import { createRef, useEffect, useRef, useState } from "react";
import { getAuthContext } from "../utility/AuthCon";
import { FaRegEdit } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
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
    }
    const handleUpdatePhotoURL = () => {
        console.log('this is new username: ', nameRef.current.value);
        updateUserPhotoURL(photoURLRef.current.value)
        .then()
        .catch()
    }
    useEffect( () => {
        photoURLRef.current.focus();
        nameRef.current.focus();
    },[isEditingName, isEditingPhotoURL])
    return (
        <div className="text-mText max-w-5/6 mx-auto mt-[100px]">
            <div className="w-[100px] h-[100px] mx-auto">
                <img className="rounded-4xl" src={user?.photoURL} alt="" />
            </div>
            < > 
                <label>
                    Name
                </label>
                <br />
                <div className="flex gap-4 items-center">
                    <input  ref={nameRef} className="bg-background2" type="text" name="" id="" defaultValue={user?.displayName}  disabled={!isEditingName}  />

                    {
                        !isEditingName && <button onClick={() => setIsEditingName(!isEditingName)} className=""><FaRegEdit /></button>
                    }
                    {
                        isEditingName &&  <button onClick={() => {
                            setIsEditingName(!isEditingName);
                            handleUpdateName();
                        }} className=""><FaCheck /></button>

                    }
                </div>
            </>
            < > 
                <label>
                    Photo URL
                </label>
                <br />
                <div className="flex gap-4 items-center">
                    <input ref={photoURLRef} className="bg-background2" type="text" name="" id="" defaultValue={user?.photoURL}  disabled={!isEditingPhotoURL}  />

                    {
                        !isEditingPhotoURL && <button onClick={() => setIsEditingPhotoURL(!isEditingPhotoURL)} className=""><FaRegEdit /></button>
                    }
                    {
                        isEditingPhotoURL &&  <button onClick={() => {
                            setIsEditingPhotoURL(!isEditingPhotoURL);
                            handleUpdatePhotoURL();
                        }} className=""><FaCheck /></button>

                    }
                </div>
            </>
        </div>
    );
};

export default Profile;