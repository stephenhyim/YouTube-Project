import React from 'react';

class VideoIndex extends React.Component {

    componentDidMount() {
        debugger
        this.props.fetchVideos()
        // this.props.fetchUser(this.props.match.params.userId)
    }

    render(){
        debugger

        if (!this.props.videos) {
            return null
        }

        // const user = this.props.user.firstname
        
        const videos = Object.values(this.props.videos).map( (video, idx) => {
            return (
                <li className = 'video-info' key={idx}>
                    <video controls width = '360' height = '202'><source src={ video.videoUrl } type='video/mp4'></source></video>
                    <div className = "video-title">{ video.title }</div>
                    {/* <div><Link to={`/users/${this.props.user}`}>{user}</Link></div> */}
                    <div className = "video-created">{ video.created_at }</div>
                </li>
            
            )
        })
        return (

            <div className = 'video-main-container'>
                <ul className = 'video-container'>{videos}</ul>
            </div>
        )

    }
}

export default VideoIndex;