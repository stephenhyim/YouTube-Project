import React from 'react';

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
        // if (!this.state.session.id) {

        // }
        this.props.createComment(this.state)
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    render() {
        debugger
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

export default CommentForm;