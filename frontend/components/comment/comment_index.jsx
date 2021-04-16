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
                    <CreateCommentFormContainer videoId = {this.props.videoId}/>
                    <p>No Comments Yet</p>
                </div>
            )
        }

        const comments = Object.values(this.props.comments).map( comment => {
            return (
                <ul key={comment.id}>{comment.body}{comment.nickname}</ul>
            )
        })
        
        return (
            <div>
                <h1>COMMENT INDEX</h1>
                
                <CreateCommentFormContainer videoId = {this.props.videoId}/>
                {comments}
            </div>
        )
        
    }

    
}

export default CommentIndex;