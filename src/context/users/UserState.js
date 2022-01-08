import React, {useReducer} from 'react';
import axios from 'axios';

import UserContext from "./UserContext";
import UserReducer from "./UserReducer";

const UserState = (props) =>{

    const initialState = {
        users:[],
        selectedUser: null
    };
    // const [stateUsers, setStateUsers] = useState(initialState);
    
    const [state, dispatch] = useReducer(UserReducer, initialState);

    const gerUsers =  async() =>{ 
        const res = await axios.get('https://reqres.in/api/Users');
            // console.log(res);   
            console.log(res.data.data);   
            dispatch({
                type: 'GET_USERS',
                payload: res.data.data
                }
            );
    }
    
    const getProfile = async(id) =>{ 
        const res = await axios.get('https://reqres.in/api/Users/'+id);
        // console.log(res);  
        console.log(res.data.data);
        dispatch({
                type: 'GET_PROFILE',
                payload: res.data.data
                }
            ); 
    }

    return(
        <UserContext.Provider 
        value={{
            users: state.users,
            selectedUser: state.selectedUser,
            gerUsers,
            getProfile,
        }}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserState;

