import React, { useState } from 'react';
import TopNavVideoForm from '../top_nav_bar/top_nav_video_form';
import Modal from 'react-modal';

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
        // const [modalIsOpen, setModalIsOpen] = useState(false)

        return (
            <div className = "video-form-main">
                <TopNavVideoForm />
                <Modal isOpen = { true }>
                    <h1>Upload videos</h1>
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" onChange={this.update} value = {this.state.title}/>
                        <textarea onChange={this.update} value = {this.state.description}></textarea>
                        <button>Upload Video</button>
                    </form>
                </Modal>
            </div>
        )
    }
}



export default VideoForm;