import React, { useContext } from "react";

import UserContext from '../context/users/UserContext';

const UsersProfiles  = () =>{
    
    const { selectedUser } = useContext(UserContext);

    console.log(selectedUser);

    return(
        <>
        {selectedUser ? (
            <div className="card card-body text-center">
                <img
                    src={selectedUser.avatar}
                    alt="user selected"
                    className="card-img-top img-fluid rounded-circle m-auto"
                    style={{ width: 180 }}
                />
                <h1>
                    {`${selectedUser.first_name} ${selectedUser.last_name}`}
                </h1>

                <h3>
                    Email: {selectedUser.email}
                </h3>
            </div>
            ) : (
            <div className="text-center p-4">Select a user </div>
        )}
        </>
    )
}

export default UsersProfiles ;