import React from 'react';

function VideoItem({ video, onVideoSelect }) {
    return (
        <div onClick={() => onVideoSelect(video)}>
            <img 
                src={video.snippet.thumbnails.medium.url} 
                alt={video.snippet.title}
            />
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