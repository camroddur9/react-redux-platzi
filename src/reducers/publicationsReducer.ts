import { LOADING_POST, ERROR_POST, UPDATE_POST, LOADING_COM, ERROR_COM  } from './../types/postTypes';

const INITIAL_STATE = {
    publications: [],
    loadingPost: false,
    error: '',
    com_loading: false,
    com_error: ''
};

export default (state = INITIAL_STATE, action: any) => {
    switch (action.type){

        case UPDATE_POST :
            return {
                ...state,
                publications: action.payload,
                loadingPost: false,
                com_loading: false,
                error: ''
            }

            case LOADING_POST:
                return {...state, loadingPost: true, error: ''};
    
            case ERROR_POST:
                return {...state, error: action.payload, loadingPost: false};

            case LOADING_COM:
                return {...state, com_loading: true, com_error: ''};
    
            case ERROR_COM:
                return {...state, com_error: action.payload, com_loading: false};

        default: return state;
    }
}