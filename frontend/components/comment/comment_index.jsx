import React from 'react';
import CreateCommentFormContainer from './create_comment_form_container';

class CommentIndex extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            edit: false,
            currentCommentId: "",
            body: ""
        }
        // this.handleDelete = this.handleDelete.bind(this)
        this.createLike = this.createLike.bind(this)
        this.update = this.update.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.createDislike = this.createDislike.bind(this)
    }
    
    componentDidMount() {
        this.props.fetchComments(this.props.videoId)

    }

    edit(commentId) {
        this.setState({
            edit: true,
            currentCommentId: commentId
        })
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(comment) {
        return (e) => {
            e.preventDefault()
            const editedComment = { id: comment.id, body: this.state.body, user_id: comment.user_id, video_id: comment.video_id}
            this.props.updateComment(editedComment)
            this.setState({
                edit: false,
                body: ""
            })
        }
    }

    createLike(like, comment, user) {
        debugger
        if (comment.likes.includes(user)) {
            debugger
            this.props.unlikeComment(like)
        } else {
            this.props.likeComment(like)
        }
    }

    createDislike(dislike, comment, user) {
        debugger
        if (comment.dislikes.includes(user)) {
            this.props.unhateComment(dislike)
        } else {
            this.props.hateComment(dislike)
        }
    }

    formatDate(uploadDate) {
        let now;

        now = new Date();
        const formatedCreate = new Date(uploadDate)

        if (now.getFullYear() - formatedCreate.getFullYear() === 1) {
            const oneyearAgo = now.getFullYear() - formatedCreate.getFullYear()
            return (`${oneyearAgo} year ago`)
        } else if (now.getFullYear() - formatedCreate.getFullYear() > 0) {
            const yearsAgo = now.getFullYear() - formatedCreate.getFullYear()
            return (`${yearsAgo} years ago`)
        } else if (now.getMonth() - formatedCreate.getMonth() === 1) {
            const oneMonthAgo = now.getMonth() - formatedCreate.getMonth()
            return (`${oneMonthAgo} month ago`)
        } else if (now.getMonth() - formatedCreate.getMonth() > 0) {
            const monthsAgo = now.getMonth() - formatedCreate.getMonth()
            return (`${monthsAgo} months ago`)
        } else if (now.getDate() - formatedCreate.getDate() === 1) {
            const oneDayAgo = now.getDate() - formatedCreate.getDate()
            return (`${oneDayAgo} day ago`)
        } else if (now.getDate() - formatedCreate.getDate() > 0) {
            const daysAgo = now.getDate() - formatedCreate.getDate()
            return (`${daysAgo} days ago`)
        } else if (now.getHours() - formatedCreate.getHours() === 1) {
            const oneHourAgo = now.getHours() - formatedCreate.getHours()
            return (`${oneHourAgo} hour ago`)
        } else if (now.getHours() - formatedCreate.getHours() > 0) {
            const hoursAgo = now.getHours() - formatedCreate.getHours()
            return (`${hoursAgo} hours ago`)
        } else if (now.getMinutes() - formatedCreate.getMinutes() === 1) {
            const oneMinuteAgo = now.getMinutes() - formatedCreate.getMinutes()
            return (`${oneMinuteAgo} minute ago`)
        } else if (now.getMinutes() - formatedCreate.getMinutes() > 0) {
            const minutesAgo = now.getMinutes() - formatedCreate.getMinutes()
            return (`${minutesAgo} minutes ago`)
        } else if (now.getSeconds() - formatedCreate.getSeconds() > 1) {
            const secondsAgo = now.getSeconds() - formatedCreate.getSeconds()
            return (`${secondsAgo} seconds ago`)
        } else {
            return ("1 second ago")
        }

    }

    render() {
        if (Object.values(this.props.comments).length === 0) {
            return (
                <div className="no-comment-wrapper">
                    <h1>0 Comments</h1>
                    <CreateCommentFormContainer videoId = {this.props.videoId}/>
                    <p>No Comments Yet</p>
                </div>
            )
        }

        const sortedComments = Object.values(this.props.comments).sort((a,b) => {
            return new Date(b.created_at) - new Date(a.created_at);
        })

        const comments = Object.values(sortedComments).map( (comment, idx) => {
            const commentDate = this.formatDate(comment.created_at)
            const editState = this.state.edit && this.state.currentCommentId === comment.id ? (
                <div className = "comment-form-wrapper">
                    <form className = "comment-form" onSubmit = {this.handleSubmit(comment)}>
                        <div className = "comment-input-container">
                            <i className="fas fa-user"></i>
                            <input id = "comment-form-id" type="text" onChange = {this.update('body')} value = {this.state.body} placeholder ={comment.body} />
                        </div>
                        <div className = "comment-button-container">
                            <button className = "comment-btn" disabled={!this.state.body}>SAVE</button>
                        </div>
                    </form>
                </div>
                ) : (
                <div className = "single-comment">
                    <div className = "comment-icon-container">
                        <i className="fas fa-user"></i>
                    </div>
                    <div className = "comment-list-wrapper">
                        <div className = "comment-details">
                            <div className = "comment-info">
                                <span className = "comment-username" key={idx}>{comment.nickname} {commentDate}</span>
                                <ul className = "comment-body" key={comment.id}>{comment.body}</ul>
                                <div className = "comment-likes-container">
                                    <div className="comment-icons" onClick = {() => this.createLike(like, comment, this.props.currentUser)}><i className="fas fa-thumbs-up"></i></div>
                                    <p>{comment.likes.length}</p>
                                    <div className="comment-icons" onClick = {() => this.createDislike(dislike, comment, this.props.currentUser)}><i className="fas fa-thumbs-down"></i></div>
                                    <p>{comment.dislikes.length}</p>
                                </div>
                            </div>
                        </div>
                        <div className = "comment-delete-dropdown">
                            <div className = "comment-dropbtn"><i className="fas fa-ellipsis-v"></i></div>
                            <div className = "delete-dropdown">
                                <div onClick = {() => this.edit(comment.id)}>Edit</div>
                                <div onClick={()=> this.props.deleteComment(comment.id)}>Delete</div>
                            </div>
                        </div>
                    </div>
                </div>
                )
            
            const like = {likable_id: comment.id, likable_type: "Comment", user_id: this.props.currentUser}
            const dislike = {dislikable_id: comment.id, dislikable_type: "Comment", user_id: this.props.currentUser}
            if (this.props.currentUser === comment.user_id ) {
                return (
                    
                    <div className = "edit-state-wrapper">
                        { editState }
                    </div>
                )
            } else {
                return (
                    <div className = "single-comment">
                        <div className = "comment-icon-container">
                            <i className="fas fa-user"></i>
                        </div>
                        <div className = "comment-list-wrapper">
                            <div className = "comment-details">
                                <div className = "comment-info">
                                    <span className = "comment-username" key={idx}>{comment.nickname} {commentDate}</span>
                                    <ul className = "comment-body" key={comment.id}>{comment.body}</ul>
                                    <div className = "comment-likes-container">
                                        <div onClick = {() => this.createLike(like, comment, this.props.currentUser)}><i className="fas fa-thumbs-up"></i></div>
                                        <p>{comment.likes.length}</p>
                                        <div><i className="fas fa-thumbs-down"></i></div>
                                        <p>0</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        })
        
        return (
            <div className = "comment-container">
                <h1>{Object.keys(this.props.comments).length} Comments</h1>
                <CreateCommentFormContainer videoId = {this.props.videoId}/>
                {comments}
            </div>
        )
        
    }

    
}

export default CommentIndex;