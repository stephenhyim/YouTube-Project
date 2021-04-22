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
    }



    componentDidMount() {
        // debugger
        this.props.fetchVideos()
    }

    // componentDidUpdate(prevProps) {
    //     debugger
    //     if (prevProps.match.params.videoId !== this.props.match.params.videoId) {
    //         this.props.fetchVideos()
    //     }
    // }

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

    updateVideo(videoId) {
        this.props.history.push(`/videos/${videoId}`)
        this.setState({currentVideo: videoId})
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
                        <video width = '1325' height = '725' controls>
                            <source src={ video.videoUrl } type='video/mp4'/>
                        </video>
                        <div className = "show-info">
                            <h1 className = "show-title">{video.title}</h1>
                            <div className = "show-metrics">
                                <div className = "show-metrics-left">
                                    <p>Views</p>
                                    <p>{video.created_at}</p>
                                </div>
                                <div className = "show-metrics-right"> 
                                    <div onClick={this.createLike}><i className="fas fa-thumbs-up"></i></div>
                                    <p>{video.likes.length}</p>
                                    <div><i className="fas fa-thumbs-down"></i></div>
                                    <p>0</p>
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