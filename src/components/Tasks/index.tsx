import React from 'react';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom';

import * as tasksActions from './../../actions/tasksActions'

import Spinner from './../general/Spinner.Component'
import Fatal from './../general/Fatal.Component';

interface Props {
    getAllTask?: any,
    tasks?: any,
    loadingTasks?: any,
    error?: any
}

interface Reducers {
    tasksReducer?: any
}

class Tasks extends React.Component<Props> {

    componentDidMount(){
        this.props.getAllTask();
    }

    

    handleShowContent = () => {
        const {tasks, loadingTasks, error} = this.props
        if(loadingTasks){
            return <Spinner/>
        }

        if(error !== ""){
            return <Fatal errorMessage = {this.props.error}/>
        }


        return Object.keys(tasks).map((userId: any) => (
            <div key = {userId}>
                <h2>
                    Users {userId}
                </h2>
                <div className = 'task-container'>
                    {this.handlePlaceTasks(userId)}
                </div>
            </div>
        ))
    }

    handlePlaceTasks = (payload: any) => {
        const {tasks} = this.props
        const by_user = {
            ...tasks[payload]
        }

        return Object.keys(by_user).map((taskId: any) => (
            <div key ={taskId}>
                <input type='checkbox' defaultChecked={by_user[taskId].completed}/>
                {
                    by_user[taskId].title
                }
            </div>
        ))
    }

    render() {
        return(
        <div>
            <button>
                <Link to='/tasks/save'>
                    Agregar
                </Link>
            </button>
            {
            this.handleShowContent()
            }
        </div>
        )
    }
}

const mapStateToProps = ({ tasksReducer }: Reducers) => tasksReducer

export default connect(mapStateToProps, tasksActions)(Tasks)