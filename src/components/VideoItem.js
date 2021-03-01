import React from 'react';

function VideoItem({ video, onVideoSelect, smallTitle }) {
    return (
        <div onClick={() => onVideoSelect(video)}>
            <div>
                <img src={video.snippet.thumbnails.medium.url} 
                    alt={video.snippet.title}/>
            </div>
            <div>
                <p>{video.snippet.title}</p>
                <p>{video.snippet.description}</p>
            </div>
        </div>
    )
};

export default VideoItem;