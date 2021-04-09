import { GET_ALL_TASK, LOADING_TASK, ERROR_TASK } from './../types/tasksTypes'

const INITIAL_STATE = {
    tasks: {},
    loadingTasks: false,
    error: ''
};

export default (state = INITIAL_STATE, action: any) => {
    switch (action.type){
        case GET_ALL_TASK:
            return {...state, 
                tasks: action.payload,
                loadingTasks: false,
                error: ''
            };
        
        case LOADING_TASK:
            return {...state, loadingTasks: true, error: ''};

        case ERROR_TASK:
            return {...state, error: action.payload, loadingTasks: false};

        default: return state;
    }
}