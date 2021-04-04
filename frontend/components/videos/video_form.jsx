import React from 'react';
import TopNavVideoForm from '../top_nav_bar/top_nav_video_form';

class VideoForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = this.props.video
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createVideo(this.state)
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    render() {
        return (
            <div className = "video-form-main">
                <TopNavVideoForm />
                <h1>VIDEO UPLOAD FORM</h1>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" onChange={this.update} value = {this.state.title}/>
                    <textarea onChange={this.update} value = {this.state.description}></textarea>
                    <button>Upload Video</button>
                </form>
            </div>
        )
    }
}



export default VideoForm;