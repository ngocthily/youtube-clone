import React from 'react';

const VideoItem = ({ video, onVideoSelect }) => {
    return (
        <div onClick={() => onVideoSelect(video)}>
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