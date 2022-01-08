import {GET_USERS, GET_PROFILE} from '../types.js';

export default function (state, action){

    const {paylod,type}= action;

    switch(type){
        case GET_USERS:
            return{
                ...state,
                users:paylod
            }
        case GET_PROFILE:
            return{
                ...state,
                selectedUser: paylod
            }
            default:
                return state;
    }

};