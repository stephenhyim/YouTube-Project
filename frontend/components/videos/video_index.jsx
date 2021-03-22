import React from 'react';
import VideoIndexItem from './video_index_item';

class VideoIndex extends React.Component {

    componentDidMount() {
        debugger
        this.props.fetchVideos()
    }

    render(){
        debugger

        if (!this.props.videos) {
            return null
        }
        
        const videos = Object.values(this.props.videos).map( (video, idx) => {
            return (
                <li className = 'video-info' key={idx}>
                    <video controls width = '360' height = '202'><source src={ video.videoUrl } type='video/mp4'></source></video>
                    <div className = "video-title">{ video.title }</div>
                    <div className = "video-created">{ video.created_at }</div>
                </li>
            
            )
        })
        return (

            <div className = 'video-main-container'>
                <ul className = 'video-container'>{videos}</ul>
            </div>
        )

    

        {/* return (
            <div className = 'video-main-container'>

                <div className='videos-index'>
                    <div className='video-row'>
                        <ul className='video'><img className='video-thumbnail' src={window.videothumbnail} /></ul>
                        <ul className='video'><img className='video-thumbnail' src={window.videothumbnail} /></ul>
                        <ul className='video'><img className='video-thumbnail' src={window.videothumbnail} /></ul>
                        <ul className='video'><img className='video-thumbnail' src={window.videothumbnail} /></ul>
                    </div>
                    <div className='video-row'>
                        <ul className='video'><img className='video-thumbnail' src={window.videothumbnail} /></ul>
                        <ul className='video'><img className='video-thumbnail' src={window.videothumbnail} /></ul>
                        <ul className='video'><img className='video-thumbnail' src={window.videothumbnail} /></ul>
                        <ul className='video'><img className='video-thumbnail' src={window.videothumbnail} /></ul>
                    </div>
                    <div className='video-row'>
                        <ul className='video'><img className='video-thumbnail' src={window.videothumbnail} /></ul>
                        <ul className='video'><img className='video-thumbnail' src={window.videothumbnail} /></ul>
                        <ul className='video'><img className='video-thumbnail' src={window.videothumbnail} /></ul>
                        <ul className='video'><img className='video-thumbnail' src={window.videothumbnail} /></ul>
                    </div>
                    <div className='video-row'>
                        <ul className='video'><img className='video-thumbnail' src={window.videothumbnail} /></ul>
                        <ul className='video'><img className='video-thumbnail' src={window.videothumbnail} /></ul>
                        <ul className='video'><img className='video-thumbnail' src={window.videothumbnail} /></ul>
                        <ul className='video'><img className='video-thumbnail' src={window.videothumbnail} /></ul>
                    </div>
                </div>

            </div>

        ) */}



    }
}

export default VideoIndex;