import React from 'react';
import { connect } from 'react-redux';

import SpinnerComponent from './../general/Spinner.Component';
import FatalComponent from './../general/Fatal.Component'

import * as usersActions from './../../actions/usersActions';
import * as publicationsActions from './../../actions/publicationsActions';

const {getAll: usersGetAll} = usersActions;
const {getByUser: postGetByUser} = publicationsActions;

interface Props {
    match?: any
    usuarios?: any
    getAll?: any
    userReducer?: any
    publicationsReducer?: any
    usersGetAll?: any
    postGetAll?: any
    postGetByUser?: any
    name?: string
}

interface State {
    currentName?: any
}



interface Reducers {
    userReducer?: any,
    publicationsReducer?: any
}

class Publications extends React.Component<Props, State> {

    async componentDidMount(){
        if (!this.props.userReducer.users.length){
            await this.props.usersGetAll()
        }
        if(!('post_key' in this.props.userReducer.users[this.props.match.params.key])){
            this.props.postGetByUser(this.props.match.params.key)
        }
    }

    handleGetName = () => {
        const key = this.props.match.params.key
        if(this.props.userReducer.users.length){
            const name = this.props.userReducer.users[key].name
            return name
        }
    }

    handlePlacePost = () => {

        if (this.props.userReducer.users.length){
        if (!('post_key' in this.props.userReducer.users[this.props.match.params.key])){
            return
        }
        else{
            console.log(this.props.publicationsReducer.publications[this.props.userReducer.users[this.props.match.params.key].post_key])
            return this.props.publicationsReducer.publications[this.props.userReducer.users[this.props.match.params.key].post_key].map((post: any) => (
                <div>
                    <h2 className = "post-title">
                        {post.id}. {post.title}
                    </h2>
                    <h3>
                        {post.body}
                    </h3>
                </div>
            ))
        }
        }
        

        
    }

    render(){
        return(
            <div>
                {this.props.userReducer.loadingUsers || this.props.publicationsReducer.loadingPost ?
                    <SpinnerComponent/>:
                    this.props.publicationsReducer.error || this.props.userReducer.error === "" ?
                        <div>
                            <h1>Post made by {this.handleGetName()}</h1>
                            {this.handlePlacePost()}
                        </div>
                        :
                        <FatalComponent
                            errorMessage = {this.props.publicationsReducer.error}
                        />
                }
            </div>
        )
        
    }
}

const mapStateToProps = ({userReducer, publicationsReducer}: Reducers) => {
    return {
        userReducer,
        publicationsReducer
    }
}

const mapDispatchToProps = {
    usersGetAll,
    postGetByUser
}

export default connect(mapStateToProps, mapDispatchToProps)(Publications)