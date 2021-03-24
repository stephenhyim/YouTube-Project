import React from 'react';
import TopNavBarContainer from '../top_nav_bar/top_nav_bar_container';
import LeftNavBarContainer from '../left_nav_bar/left_nav_bar_container';

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
            <div className = "show-container">
                <TopNavBarContainer />
                
                <video width = '360' height = '202' controls>
                    <source src={ video.videoUrl } type='video/mp4'/>
                </video>
                <h1>{video.title}</h1>
                <p>{video.firstname}</p>
            </div>
           
        )

    }
}

export default VideoShow