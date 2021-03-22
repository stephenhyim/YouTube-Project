import React from 'react';
import { Link } from 'react-router-dom';

const VideoIndexItem = props => {
    return (
        <div>
            <h1>VIDEO INDEX ITEM</h1>
            
            <li>
                <Link to = {`/videos/${props.video.id}`}>{props.video.title}</Link>
            </li>
        </div>
    )
}

export default VideoIndexItem;