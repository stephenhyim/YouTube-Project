import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { fetchVideos } from '../../actions/video_actions';


class VideoIndexSlider extends React.Component {
    // componentDidMount() {
    //     this.props.fetchVideos()
    // }
    formatDate(uploadDate) {
        let now;

        now = new Date();
        const formatedCreate = new Date(uploadDate)
        // debugger

        if (now.getFullYear() - formatedCreate.getFullYear() === 1) {
            const oneyearAgo = now.getFullYear() - formatedCreate.getFullYear()
            return (`${oneyearAgo} year ago`)
        } else if (now.getFullYear() - formatedCreate.getFullYear() > 0) {
            const yearsAgo = now.getFullYear() - formatedCreate.getFullYear()
            return (`${yearsAgo} years ago`)
        } else if (now.getMonth() - formatedCreate.getMonth() === 1) {
            const oneMonthAgo = now.getMonth() - formatedCreate.getMonth()
            return (`${oneMonthAgo} month ago`)
        } else if (now.getMonth() - formatedCreate.getMonth() > 0) {
            const monthsAgo = now.getMonth() - formatedCreate.getMonth()
            return (`${monthsAgo} months ago`)
        } else if (now.getDate() - formatedCreate.getDate() === 1) {
            const oneDayAgo = now.getDate() - formatedCreate.getDate()
            return (`${oneDayAgo} day ago`)
        } else if (now.getDate() - formatedCreate.getDate() > 0) {
            const daysAgo = now.getDate() - formatedCreate.getDate()
            return (`${daysAgo} days ago`)
        } else if (now.getHours() - formatedCreate.getHours() === 1) {
            const oneHourAgo = now.getHours() - formatedCreate.getHours()
            return (`${oneHourAgo} hour ago`)
        } else if (now.getHours() - formatedCreate.getHours() > 0) {
            const hoursAgo = now.getHours() - formatedCreate.getHours()
            return (`${hoursAgo} hours ago`)
        } else if (now.getMinutes() - formatedCreate.getMinutes() === 1) {
            const oneMinuteAgo = now.getMinutes() - formatedCreate.getMinutes()
            return (`${oneMinuteAgo} minute ago`)
        } else if (now.getMinutes() - formatedCreate.getMinutes() > 0) {
            const minutesAgo = now.getMinutes() - formatedCreate.getMinutes()
            return (`${minutesAgo} minutes ago`)
        } else if (now.getSeconds() - formatedCreate.getSeconds() > 1) {
            const secondsAgo = now.getSeconds() - formatedCreate.getSeconds()
            return (`${secondsAgo} seconds ago`)
        } else {
            return ("1 second ago")
        }

    }

    render() {
        // debugger
        if (!this.props.videos) {
            return null
        }

        
        const {user, videos, ownVideo} = this.props
        // debugger
        const otherVideos = Object.values(videos).map( (video, idx) => {
            const viewDate = this.formatDate(video.created_at)
            // debugger
            if (video.id !== parseInt(ownVideo) ) {
            
                return (
                    <li className='video-slide-content' key={idx}>
                        <div className = "video-slide-thumbnail">
                            <div onClick={() => this.props.updateVideo(video.id)}><video width = '168' height = '94'><source src={ video.videoUrl } type='video/mp4'></source></video></div>
                        </div>
                        <div className = "video-slide-info">
                            <Link to={`/videos/${video.id}`}><h3 className = "video-slide-title">{ video.title }</h3></Link>
                            <Link className="video-slide-username" to={`/users/${video.user_id}`}>{video.firstname}</Link>
                            <div className = "video-slide-created">{ viewDate }</div>
                        </div>
                    </li>
                
                )
            } else {
                return null;
            }
        })
        return (

            <div className = 'video-slide-main'>
                <ul className = 'video-slide-container'>{otherVideos}</ul>
            </div>
        )
    }
}


export default withRouter(VideoIndexSlider) 
