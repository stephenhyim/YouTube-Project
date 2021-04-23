import React from 'react';
import TopNavBar from '../top_nav_bar/top_nav_bar_container'
import Modal from './create_video_modal';

class VideoChannel extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: "",
            description: "",
            videoFile: null,
            videoUrl: null,
            id: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.update = this.update.bind(this)
        this.handleFile = this.handleFile.bind(this)
        this.renderErrors = this.renderErrors.bind(this)
        this.handleEdit = this.handleEdit.bind(this)
        this.resetState = this.resetState.bind(this)
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
        if (this.props.errors.length === 0) {
            this.props.createVideo(formData)
            this.props.closeModal()
        } else {
            null
        }
        this.resetState()
    }

    handleEdit(e) {
        debugger
        e.preventDefault();
        const formData = new FormData();
        formData.append('video[title]', this.state.title);
        formData.append('video[description]', this.state.description)
        if (this.state.videoFile) {
            formData.append('video[video]', this.state.videoFile);
        }
        formData.append('video[user_id]', this.props.userId);
        formData.append('video[id]', this.state.id);
        this.props.updateVideo(formData, this.state.id)
        if (this.props.errors.length === 0) {
            this.props.closeModal()
        }
        this.resetState()
    }

    resetState() {
        this.setState({
            title: "",
            description: "",
            videoFile: null,
            videoUrl: null,
            id: ""
        })
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleFile(e) {
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

    grabVideo(video) {
        this.setState({"id": video.id, "title": video.title, "description": video.description, "videoUrl": video.videoUrl })
        this.props.openModal("openEditModal")
    }
    
    render() {
        debugger
        
        if (Object.keys(this.props.videos).length === 0) {
            return null;
        }

        const videoInfo = Object.values(this.props.videos).map( (video, idx) => {
            if (video.user_id === this.props.userId) {
                return (
                    <tr key={idx}>
                        <td><video width="200" height="80" src={video.videoUrl}></video></td>
                        <td>{video.title}</td>
                        <td>{video.description}</td>
                        <td>{video.created_at}</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td><button className="channel-edit-btn" onClick={()=> this.grabVideo(video)}>Edit</button></td>
                        <td><button className="channel-delete-btn" onClick={() => this.props.deleteVideo(video.id)}>Delete</button></td>
                    </tr>
                )
            } else {
                return null;
            };
        });

        return (
            <div className = "video-form-main">
                <TopNavBar/>
                <Modal resetState = {this.resetState} handleEdit = {this.handleEdit} renderErrors = {this.renderErrors} errors = {this.props.errors} handleFile = {this.handleFile} handleSubmit = {this.handleSubmit} update = {this.update} state = {this.state}/>
                <div className = "table-wrapper">
                    <table className = "table">
                        <tbody>
                            <tr>
                                <th>Video</th>
                                <th>Video Title</th>
                                <th>Video Description</th>
                                <th>Date</th>
                                <th>Views</th>
                                <th>Comments</th>
                                <th>Likes</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                            {videoInfo}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}



export default VideoChannel;