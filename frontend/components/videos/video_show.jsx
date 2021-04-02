import React from 'react';
import { Link } from 'react-router-dom';
import TopNavBarContainer from '../top_nav_bar/top_nav_bar_container';


class VideoShow extends React.Component {
    componentDidMount() {
        debugger
        this.props.fetchVideos()
    }

    render() {
        debugger

        if (Object.keys(this.props.videos).length === 0) {
            return null
        }

        const video = this.props.videos[this.props.match.params.videoId]

        const videos = Object.values(this.props.videos)

        debugger
        return (
            <div className = "show-main">
                <TopNavBarContainer />
                <div className = "show-container">
                    <video width = '1325' height = '725' controls>
                        <source src={ video.videoUrl } type='video/mp4'/>
                    </video>
                    <div className = "show-info">
                        <h1 className = "show-title">{video.title}</h1>
                        <div className = "show-metrics">
                            <p>Views</p>
                            <p>{video.created_at}</p>
                        </div>
                    </div>
                    <div className = "user-info">
                        <Link to = {`/users/${video.user_id}`}><h1>{video.firstname}</h1></Link>
                    </div>
                    <div>
                        <p>COMMENT COMPONENT</p>
                    </div>
                </div>
            </div>
           
        )

    }
}

export default VideoShow