import axios from 'axios';
import { GET_ALL_POST, LOADING_POST, ERROR_POST, GET_ALL_BY_USER } from './../types/postTypes';
import * as usuariosTypes from './../types/usersTypes';

const {GET_ALL: GET_ALL_USERS} = usuariosTypes;

export const getByUser = (key: number) => async(dispatch: any, getState: any) => {

    dispatch({
        type: LOADING_POST
    })

    try{
        const {users} = getState().userReducer;
        const {publications} = getState().publicationsReducer;
        const users_id = users[key].id
        
        const resp = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${users_id}`)
        
        const post_updated = [
            ...publications,
            resp.data
        ]

        const post_key = post_updated.length - 1
        const user_updated = [...users];
        user_updated[key] = {
            ...users[key],
            post_key
        }

        dispatch({
            type: GET_ALL_USERS,
            payload: user_updated
        });

        dispatch({
            type: GET_ALL_BY_USER,
            payload: post_updated
        });
    }
    catch (error){
        dispatch({
            type: ERROR_POST,
            payload: error.message
        })
    }
}