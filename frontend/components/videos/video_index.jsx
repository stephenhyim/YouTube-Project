import React from 'react';

class VideoIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    render(){
        return (
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





            // <div className = 'video-main-container'>

            //     <div className = 'video-index'>

            //         <div className = 'video-row'></div>

            //             <div className = 'video-thumbnail'></div>
            //             <div className = 'video-description-container'>
            //                 <div className = 'video-icon-container'>
            //                     <img src ></img>
            //                 </div>
            //             </div>
            //             <div className='video-text-container'>
            //                 <div className='video-title'></div>
            //                 <div className='video-info-container'>
            //                     <div className='video-author'></div>
            //                     <div className='video-views'></div>
            //                     <div className='video-uploaded'></div>
            //                 </div>
            //             </div>

            //         <div className = 'video-row'></div>

            //     </div>

            // </div>
        )
    }
}

export default VideoIndex;