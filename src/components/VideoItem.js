import React from 'react';

const VideoItem = ({ video }) => {
    return (
        <div>
            <img src={video.snippet.thumbnails.medium.url}/>
            <div>
                {video.snippet.title}
            </div>
            <div>
                {video.snippet.description}
            </div>
        </div>
    )
};

export default VideoItem;