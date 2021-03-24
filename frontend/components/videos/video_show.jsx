import React from 'react';

class VideoShow extends React.Component {
    componentDidMount() {
        debugger
        this.props.fetchVideos()
    }

    render() {
        debugger

        if (!this.props.videos) {
            return null
        }

        const video = this.props.videos[this.props.match.params.videoId]

        const videos = Object.values(this.props.videos)

        debugger
        return (
            <div>
                <video width = '360' height = '202' controls>
                    <source src={ video.videoUrl } type='video/mp4'/>
                </video>
            </div>
           
        )

    }
}

export default VideoShow