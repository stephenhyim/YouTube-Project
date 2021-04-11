import React from 'react';
import { Link } from 'react-router-dom';
import TopNavBarContainer from '../top_nav_bar/top_nav_bar_container';
import LeftNavBarContainer from '../left_nav_bar/left_nav_bar_container';

class UserShow extends React.Component {
    constructor(props) {
        debugger
        super(props)
        
    }


    componentDidMount() {
        debugger
        this.props.fetchUser(this.props.match.params.userId)
    }

    

    render() {
        

        if (!this.props.user) {
            return null;
        }

        debugger

        let user_video = null
        if (this.props.user.user_video) {

            user_video = Object.values(this.props.user.user_video).map( (video, idx) => {
                return (
                    <li className = "video-info" key={idx}>
                        <Link to={`/videos/${video.id}`}><video width = '360' height = '202'><source src={ video.videoUrl } type='video/mp4'></source></video></Link>
                        <Link to = {`/videos/${video.id}`}><div className = "video-title">{ video.title }</div></Link>
                        <div className = "video-created">{ video.created_at }</div>
                    </li>
                )
            })
        }

        return (
            <div className = "user-show-main">
                <TopNavBarContainer />
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
        )
    }
}

export default UserShow