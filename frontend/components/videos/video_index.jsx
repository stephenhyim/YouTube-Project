import React from 'react';
import { Link } from 'react-router-dom';

class VideoIndex extends React.Component {

    componentDidMount() {
        // debugger
        this.props.fetchVideos()
        // this.props.fetchUser(this.props.match.params.userId)
    }

    formatDate(uploadDate) {
        let now;

        now = new Date();
        const formatedCreate = new Date(uploadDate)
        debugger

        if (now.getFullYear() - formatedCreate.getFullYear() > 0) {
            
            const yearsAgo = now.getFullYear() - formatedCreate.getFullYear()
            debugger
            return (
                    `${yearsAgo} years ago`
            )
        } else if (now.getMonth() - formatedCreate.getMonth() > 0) {
            const monthsAgo = now.getMonth() - formatedCreate.getMonth()
            return (
                    `${monthsAgo} months ago` 
            )
        } else if (now.getDate() - formatedCreate.getDate() > 0) {
            const daysAgo = now.getDate() - formatedCreate.getDate()
            return (
                    `${daysAgo} days ago` 
            )
        } else if (now.getHours() - formatedCreate.getHours() > 0) {
            const hoursAgo = now.getHours() - formatedCreate.getHours()
            return (
                `${hoursAgo} hours ago`  
            )
        } else if (now.getMinutes() - formatedCreate.getMinutes() > 0) {
            const minutesAgo = now.getMinutes() - formatedCreate.getMinutes()
            return (
                 `${minutesAgo} minutes ago` 
            )
        } else {
            const secondsAgo = now.getSeconds() - formatedCreate.getSeconds()
            return (
                    `${secondsAgo} seconds ago` 
            )
        }

    }

    render(){
        debugger

        if (!this.props.videos) {
            return null
        }

        
        const videos = Object.values(this.props.videos).map( (video, idx) => {
            const viewDate = this.formatDate(video.created_at)
            return (
                <li className = 'video-info' key={idx}>
                    <Link to={`/videos/${video.id}`}><video width = '360' height = '202'><source src={ video.videoUrl } type='video/mp4'></source></video></Link>
                    <Link to={`/videos/${video.id}`}><h3 className = "video-title">{ video.title }</h3></Link>
                    <Link className="user-firstname" to={`/users/${video.user_id}`}>{video.firstname}</Link>
                    <div className = "video-created">{ viewDate }</div>
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