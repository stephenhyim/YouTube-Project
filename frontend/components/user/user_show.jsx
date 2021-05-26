import React from 'react';
import { Link } from 'react-router-dom';
import TopNavBarContainer from '../top_nav_bar/top_nav_bar_container';
import LeftNavBarContainer from '../left_nav_bar/left_nav_bar_container';

class UserShow extends React.Component {
    constructor(props) {
        super(props)
        
    }


    componentDidMount() {
        this.props.fetchUser(this.props.match.params.userId)
    }

    formatDate(uploadDate) {
        let now;

        now = new Date();
        const formatedCreate = new Date(uploadDate)

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
        if (!this.props.user) {
            return null;
        }

        let user_video = null
        if (this.props.user.user_video) {

            user_video = Object.values(this.props.user.user_video).map( (video, idx) => {
                const viewDate = this.formatDate(video.created_at)
                return (
                    <li className = "video-info" key={idx}>
                        <Link to={`/videos/${video.id}`}><video width = '360' height = '202'><source src={ video.videoUrl } type='video/mp4'></source></video></Link>
                        <Link to = {`/videos/${video.id}`}><div className = "video-title">{ video.title }</div></Link>
                        <div className = "video-created">
                            <p>Views Coming</p>
                            <p>&middot;</p>
                            <p>{ viewDate }</p>
                        </div>
                    </li>
                )
            })
        }

        return (
            <div className = "user-show-main">
                <TopNavBarContainer />
                <div className = "user-show-wrapper">
                    <LeftNavBarContainer />
                    <div className = "user-show-container">
                        <div className = "user-info">
                            <i className="fas fa-user"></i>
                            <h1 className = "username">{this.props.user.firstname}</h1>
                        </div>
                        <div className = "video-row-container">
                            <h1 className = "user-show-upload">Uploads</h1>
                            <ul className = "video-row">{user_video}</ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default UserShow