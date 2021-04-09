import React from 'react';
import { connect } from 'react-redux';

import SpinnerComponent from './../general/Spinner.Component';
import FatalComponent from './../general/Fatal.Component';
import CommentComponent from './Comments.Component'

import * as usersActions from './../../actions/usersActions';
import * as publicationsActions from './../../actions/publicationsActions';

const {getAll: usersGetAll} = usersActions;
const {
    getByUser: postGetByUser,
    openClose: postOpenClose,
    getComments: getComments,
} = publicationsActions;

interface Props {
    match?: any,
    usuarios?: any,
    getAll?: any,
    userReducer?: any,
    publicationsReducer?: any,

    usersGetAll?: any,
    postGetAll?: any,
    postGetByUser?: any,
    postOpenClose?: any,
    getComments?: any,

    name?: string,
}

interface State {
    currentName?: any
}



interface Reducers {
    userReducer?: any,
    publicationsReducer?: any,
    openClose?: any
}

class Publications extends React.Component<Props, State, Reducers> {

    async componentDidMount(){
        if (!this.props.userReducer.users.length){
            await this.props.usersGetAll()
        }
        if(this.props.userReducer.users.length){
            if(!('post_key' in this.props.userReducer.users[this.props.match.params.key])){
                this.props.postGetByUser(this.props.match.params.key)
            }
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
        return this.handleShowInfo()
        }
        
    }

    handleShowInfo = () => (
        this.props.publicationsReducer.publications[this.props.userReducer.users[this.props.match.params.key].post_key].map((post: any, keyPost: number) => (
            <div  className = "post-title" key = {keyPost} onClick = {() => this.handleShowComments(this.props.userReducer.users[this.props.match.params.key].post_key, keyPost, post.comments)}>
                <h2 >
                    {post.title}
                </h2>
                <h3>
                    {post.body}
                </h3>
                {
                    (post.open) ? <CommentComponent comments = {post.comments}/> : <></>
                }
            </div>
        ))
    )

    handleShowComments = (pub_key: any, com_key: any, comments: any) => {
        this.props.postOpenClose(pub_key, com_key);
        if(!comments.length){
            this.props.getComments(pub_key, com_key);
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
    postGetByUser,
    postOpenClose,
    getComments
}

export default connect(mapStateToProps, mapDispatchToProps)(Publications)