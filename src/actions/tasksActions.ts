import axios from 'axios';
import { textChangeRangeNewSpan } from 'typescript';
import {GET_ALL_TASK, LOADING_TASK, ERROR_TASK} from '../types/tasksTypes';
 
export const getAllTask = () => async(dispatch: any) => {

    dispatch({
        type: LOADING_TASK
    });

    try {
        const resp = await axios.get('https://jsonplaceholder.typicode.com/todos')
        
        const tasks = {};

        resp.data.map((ts: any) => {
            const index = ts.userId
            tasks[index] = {
                ...tasks[index],
                [ts.id]: {
                    ...ts
                }
            }
        })

        dispatch({
            type: GET_ALL_TASK,
            payload: tasks
        })
    }
    catch (error){
        dispatch({
            type: ERROR_TASK,
            payload: error.message
        })
    }
}