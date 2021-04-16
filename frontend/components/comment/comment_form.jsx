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
            <div>
                <form onSubmit = {this.handleSubmit}>
                    <input type="text" onChange={this.update('body')} value = {this.state.body}/>
                    <button>Comment</button>
                </form>
            </div>
        )
    }

}

export default CommentForm;