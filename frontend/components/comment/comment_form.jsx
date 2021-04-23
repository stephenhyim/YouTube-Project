import React from 'react';
import { withRouter } from 'react-router-dom';

class CommentForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            body: "",
            video_id: this.props.currentVideo
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.update = this.update.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault()

        if (this.props.currentUser) {
        this.props.createComment(this.state)
        this.setState({
            body: ""
        })} else {
            this.props.history.push("/login")
        }
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }



    render() {
        // debugger
        return (
            <div className = "comment-form-wrapper">
                <form className = "comment-form" onSubmit = {this.handleSubmit}>
                    <div className = "comment-input-container">
                        <i className="fas fa-user"></i>
                        <input id = "comment-form-id" type="text" onChange={this.update('body')} value = {this.state.body} placeholder = "Add a public comment..."/>
                    </div>
                    <div className = "comment-button-container">
                        <button className = "comment-btn" disabled={!this.state.body}>COMMENT</button>
                    </div>

                </form>
            </div>
        )
    }

}

export default withRouter(CommentForm);