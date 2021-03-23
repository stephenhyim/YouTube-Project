import React from 'react';

class UserShow extends React.Component {
    componentDidMount() {
        debugger
        this.props.fetchUser(this.props.match.params.userId)
    }

    

    render() {

        if (!this.props.user_videos) {
            return null;
        }

        const user_videos = Object.values(this.props.user_videos).map( (video, idx) => {
            return (
                <li key={idx}>{video.title}</li>
            )
        })

        return (
            <div>
                <h1>USER SHOW</h1>
                <ul>
                    {user_videos}
                </ul>
            </div>
        )
    }
}

export default UserShow