import React from 'react';
import { fetchVideos } from '../../actions/video_actions';
import TopNavVideoForm from '../top_nav_bar/top_nav_video_form';
import Modal from '../videos/create_video_modal';

class VideoForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: "",
            description: "",
            videoFile: null
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.update = this.update.bind(this)
        this.handleFile = this.handleFile.bind(this)
        
    }

    componentDidMount() {
        this.props.openModal('openModal');
        this.props.fetchVideos();
    }

    handleSubmit(e) {
        debugger
        e.preventDefault();
        const formData = new FormData();
        formData.append('video[title]', this.state.title);
        formData.append('video[description]', this.state.description)
        formData.append('video[video]', this.state.videoFile);
        formData.append('video[user_id]', this.props.userId);
        this.props.createVideo(formData)
        this.props.closeModal();
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleFile(e) {
        debugger
        this.setState({videoFile: e.currentTarget.files[0]})
    }

    render() {
        debugger
        console.log(this.state)

        return (
            <div className = "video-form-main">
                <TopNavVideoForm />
                <Modal handleFile = {this.handleFile} handleSubmit = {this.handleSubmit} update = {this.update} state = {this.state}/>
            </div>
        )
    }
}



export default VideoForm;