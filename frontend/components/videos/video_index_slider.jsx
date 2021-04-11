import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchVideos } from '../../actions/video_actions';


class VideoIndexSlider extends React.Component {
    // componentDidMount() {
    //     this.props.fetchVideos()
    // }

    render() {
        debugger
        if (!this.props.videos) {
            return null
        }

        const videos = Object.values(this.props.videos).map( (video, idx) => {
            debugger
            if (video.user_id != this.props.user) {
            
                return (
                    <li className='video-slide-content' key={idx}>
                        <div className = "video-slide-thumbnail">
                            <Link to={`/videos/${video.id}`}><video width = '168' height = '94'><source src={ video.videoUrl } type='video/mp4'></source></video></Link>
                        </div>
                        <div className = "video-slide-info">
                            <Link to={`/videos/${video.id}`}><h3 className = "video-slide-title">{ video.title }</h3></Link>
                            <Link className="video-slide-username" to={`/users/${video.user_id}`}>{video.firstname}</Link>
                            <div className = "video-slide-created">{ video.created_at }</div>
                        </div>
                    </li>
                
                )
            } else {
                return null;
            }
        })
        return (

            <div className = 'video-slide-main'>
                <ul className = 'video-slide-container'>{videos}</ul>
            </div>
        )
    }
}

// const mSTP = (state) => {
//     return {
//         videos: Object.values(state.entities.videos)
//     }
// }

// const mDTP = dispatch => {
//     return {
//         fetchVideos: () => dispatch(fetchVideos())
//     }
// }

export default VideoIndexSlider 
// connect(mSTP, mDTP)(VideoIndexSlider)