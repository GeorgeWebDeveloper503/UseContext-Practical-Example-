import React, {useEffect} from "react";
import { useContext } from 'react';
import UserContext from '../context/users/UserContext';

const UserList = () =>{

    const { gerUsers, getProfile, users } = useContext(UserContext);

    useEffect(()=>{
        gerUsers();
        getProfile(1);
    },[])

    return(
        <div>

        </div>
    )
}

export default UserList;