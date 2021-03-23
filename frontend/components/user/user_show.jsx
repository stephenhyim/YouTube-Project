import React from 'react';
import LeftNavBarContainer from '../left_nav_bar/left_nav_bar_container'

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
                    <li key={idx}>
                        <video controls width = '360' height = '202'><source src={ video.videoUrl } type='video/mp4'></source></video>
                        <div className = "video-title">{ video.title }</div>
                        <div className = "video-created">{ video.created_at }</div>
                    </li>
                )
            })
        }

        return (
            <div>
                <LeftNavBarContainer />
                <div className = "user-show-container">
                    <h1>USER SHOW</h1>
                    <ul>
                        {user_video}
                    </ul>
                </div>
            </div>
        )
    }
}

export default UserShow