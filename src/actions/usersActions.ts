import axios from 'axios';
import {GET_ALL, LOADING_USERS, ERROR} from '../types/usersTypes';
 
export const getAll = () => async(dispatch: any) => {

    dispatch({
        type: LOADING_USERS
    });

    try {
        const resp = await axios.get('https://jsonplaceholder.typicode.com/users')
        dispatch({
            type: GET_ALL,
            payload: resp.data
        })
    }
    catch (error){
        dispatch({
            type: ERROR,
            payload: error.message
        })
    }
}