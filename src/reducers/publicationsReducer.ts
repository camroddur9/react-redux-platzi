import { GET_ALL_POST, LOADING_POST, ERROR_POST, GET_ALL_BY_USER  } from './../types/postTypes';

const INITIAL_STATE = {
    publications: [],
    loadingPost: false,
    error: ''
};

export default (state = INITIAL_STATE, action: any) => {
    switch (action.type){

        case GET_ALL_BY_USER :
            return {
                ...state,
                publications: action.payload,
                loadingPost: false,
                error: ''
            }

            case LOADING_POST:
                return {...state, loadingPost: true, error: ''};
    
            case ERROR_POST:
                return {...state, error: action.payload, loadingPost: false};

        default: return state;
    }
}