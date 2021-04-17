import React from 'react';
import CreateCommentFormContainer from './create_comment_form_container';

class CommentIndex extends React.Component {
    constructor(props) {
        super(props)
        // this.state = {
        //     commentCount: 0
        // }
    }
    
    componentDidMount() {
        this.props.fetchComments(this.props.videoId)

    }

    render() {
        if (Object.values(this.props.comments).length === 0) {
            return (
                <div>
                    <h1>Comments</h1>
                    <CreateCommentFormContainer videoId = {this.props.videoId}/>
                    <p>No Comments Yet</p>
                </div>
            )
        }

        const comments = Object.values(this.props.comments).map( (comment, idx) => {
            return (
                <div className = "single-comment">
                    <ul className = "comment-username" key={idx}>{comment.nickname}</ul>
                    <ul className = "comment-body" key={comment.id}>{comment.body}</ul>
                </div>
            )
        })
        
        return (
            <div className = "comment-container">
                <h1>Comments</h1>
                <CreateCommentFormContainer videoId = {this.props.videoId}/>
                {comments}
            </div>
        )
        
    }

    
}

export default CommentIndex;