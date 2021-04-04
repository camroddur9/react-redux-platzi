import { GET_ALL, LOADING_USERS, ERROR } from './../types/usersTypes'

const INITIAL_STATE = {
    users: [],
    loadingUsers: false,
    error: ''
};

export default (state = INITIAL_STATE, action: any) => {
    switch (action.type){
        case GET_ALL:
            return {...state, 
                users: action.payload,
                loadingUsers: false,
                error: ''
            };
        
        case LOADING_USERS:
            return {...state, loadingUsers: true, error: ''};

        case ERROR:
            return {...state, error: action.payload, loadingUsers: false};

        default: return state;
    }
}