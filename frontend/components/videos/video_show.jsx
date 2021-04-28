import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import TopNavBarContainer from '../top_nav_bar/top_nav_bar_container';
import VideoIndexSlider from '../videos/video_index_slider';
import CommentIndex from '../comment/comment_index_container';

class VideoShow extends React.Component {
    constructor(props) {
        super(props)
        debugger
        this.state = {
            like_value: 0,
            currentVideo: props.match.params.videoId
        }
        this.createLike = this.createLike.bind(this)
        this.updateVideo = this.updateVideo.bind(this)
        this.createDislike = this.createDislike.bind(this)
    }



    componentDidMount() {
        // debugger
        this.props.fetchVideos()
    }

    componentDidUpdate(prevProps) {
        debugger
        if (prevProps.match.params.videoId !== this.props.match.params.videoId) {
            this.props.fetchComments(this.props.videoId)
        }
    }

    createLike() {
        const like = {likable_id: this.props.video, likable_type: "Video", user_id: this.props.user}
        debugger
        if (!this.props.videos[this.props.video].likes.includes(this.props.user)) {
            debugger
            this.props.likeVideo(like)
        } else {
            this.props.dislikeVideo(like)
        }
    }

    createDislike() {
        const dislike = {dislikable_id: this.props.video, dislikable_type: "Video", user_id: this.props.user }
        if (!this.props.videos[this.props.video].dislikes.includes(this.props.user)) {
            this.props.hateVideo(dislike)
        } else {
            this.props.unhateVideo(dislike)
        }
    }

    updateVideo(videoId) {
        this.props.history.push(`/videos/${videoId}`)
        this.setState({currentVideo: videoId})
    }

    videoShowDate(uploadDate) {
        const formatedCreate = new Date(uploadDate)
        return `${formatedCreate.toLocaleString('en-us', { month: 'short' })} ${formatedCreate.getDate()}, ${formatedCreate.getFullYear()}`
    }

    render() {
        // debugger
        if (Object.keys(this.props.videos).length === 0) {
            return null
        }

        const video = this.props.videos[this.state.currentVideo]
        debugger

        const videos = Object.values(this.props.videos)

        // debugger
        return (
            <div className = "show-main">
                <TopNavBarContainer />
                <div className = "show-container">
                    <div className = "video-show-left">
                        <video width = '1325' height = '725' controls src={ video.videoUrl }></video>
                        <div className = "show-info">
                            <h1 className = "show-title">{video.title}</h1>
                            <div className = "show-metrics">
                                <div className = "show-metrics-left">
                                    <p>Views Coming Soon</p>
                                    <p>{this.videoShowDate(video.created_at)}</p>
                                </div>
                                <div className = "show-metrics-right"> 
                                    <div onClick={this.createLike}><i className="fas fa-thumbs-up"></i></div>
                                    <p>{video.likes.length}</p>
                                    <div onClick={this.createDislike}><i className="fas fa-thumbs-down"></i></div>
                                    <p>{video.dislikes.length}</p>
                                </div>
                            </div>
                        </div>
                        <div className = "user-info">
                            <Link to = {`/users/${video.user_id}`}><h1>{video.firstname}</h1></Link>
                            <p>{video.description}</p>
                        </div>
                        <div className = "comment-main">
                            <CommentIndex />
                        </div>
                    </div>
                    <div className = "video-show-right">
                        <VideoIndexSlider updateVideo = {this.updateVideo} user = {this.props.user} ownVideo = {this.props.video} videos = {this.props.videos} />
                    </div>
                </div>
            </div>
           
        )

    }
}

export default withRouter(VideoShow)