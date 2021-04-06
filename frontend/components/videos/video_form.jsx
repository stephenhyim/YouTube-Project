import React from 'react';
import TopNavBar from '../top_nav_bar/top_nav_bar_container'
import TopNavVideoForm from '../top_nav_bar/top_nav_video_form';
import Modal from '../videos/create_video_modal';

class VideoForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: "",
            description: "",
            videoFile: null,
            videoUrl: null
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.update = this.update.bind(this)
        this.handleFile = this.handleFile.bind(this)
        this.renderErrors = this.renderErrors.bind(this)
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
        if (this.state.videoFile) {
            formData.append('video[video]', this.state.videoFile);
        }
        formData.append('video[user_id]', this.props.userId);
        this.props.createVideo(formData)
        // if (this.props.createVideo(formData)) {
        //     this.props.closeModal();
        // } else {
        //     null;
        // }
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleFile(e) {
        debugger
        const file = e.currentTarget.files[0];
        const fileReader = new FileReader();
        fileReader.onloadend = () => {
            this.setState({videoFile: file, videoUrl: fileReader.result})
        };
        if (file) {
            fileReader.readAsDataURL(file);
        }
    }

    renderErrors() {
        return(
          <ul>
            {this.props.errors.map((error, i) => (
              <li key={`error-${i}`}>
                {error}
              </li>
            ))}
          </ul>
        );
    }
    
    render() {
        debugger
        
        if (Object.keys(this.props.videos).length === 0) {
            return null;
        }

        const videoInfo = Object.values(this.props.videos).map(video => {
            if (video.user_id === this.props.userId) {
                return (
                    <tr>
                        <td>{video.title}</td>
                        <td>{video.description}</td>
                        <td>{video.created_at}</td>
                        <td>view counter</td>
                        <td>comment counter</td>
                        <td>link counter</td>
                        <td>Edit video</td>
                        <td>Delete video</td>
                    </tr>
                )
            } else {
                return null;
            };
        });

        return (
            <div className = "video-form-main">
                {/* <TopNavVideoForm /> */}
                <TopNavBar/>
                <Modal renderErrors = {this.renderErrors} errors = {this.props.errors} handleFile = {this.handleFile} handleSubmit = {this.handleSubmit} update = {this.update} state = {this.state}/>
                <div className = "table-wrapper">
                    <table className = "table">
                        <tr>
                            <th colSpan="2">Video</th>
                            <th>Date</th>
                            <th>Views</th>
                            <th>Comments</th>
                            <th>Likes</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                        {videoInfo}
                    </table>
                </div>
            </div>
        )
    }
}



export default VideoForm;