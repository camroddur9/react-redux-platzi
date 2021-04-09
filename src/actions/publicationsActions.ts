import axios from 'axios';
import { LOADING_POST, ERROR_POST, UPDATE_POST, LOADING_COM, ERROR_COM } from './../types/postTypes';
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
        
        const nuevas = resp.data.map((post: any) => ({
            ...post,
            comments: [],
            open: false
        }));
        
        const updated_post = [
            ...publications,
            nuevas
        ]

        const post_key = updated_post.length - 1
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
            type: UPDATE_POST,
            payload: updated_post
        });
    }
    catch (error){
        dispatch({
            type: ERROR_POST,
            payload: error.message
        })
    }
}

export const openClose = (pub_key: any, com_key: number) => (dispatch: any, getState: any) => {
    const {publications} = getState().publicationsReducer;
    const selected = publications[pub_key][com_key]

    const updated = {
        ...selected,
        open: !selected.open
    }

    const updated_post = [...publications];

    updated_post[pub_key] = [
        ...publications[pub_key]
    ]

    updated_post[pub_key][com_key] = updated

    dispatch({
        type: UPDATE_POST,
        payload: updated_post
    });
}

export const getComments = (pub_key: any, com_key: number) => async (dispatch: any, getState: any) => {
    const {publications} = getState().publicationsReducer;
    const selected = publications[pub_key][com_key]

    dispatch({
        type: LOADING_COM
    })

    try {
        const resp = await axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${selected.id}`)

        const updated = {
            ...selected,
            comments: resp.data
        }

        const updated_post = [...publications];

        updated_post[pub_key] = [
            ...publications[pub_key]
        ]

        updated_post[pub_key][com_key] = updated

        dispatch({
            type: UPDATE_POST,
            payload: updated_post
        });
    }
    
    catch (error){
        dispatch({
            type: ERROR_COM,
            payload: error.message
        })
    }
}