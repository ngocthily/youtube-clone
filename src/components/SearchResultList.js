import React from 'react';
import VideoItem from 'components/VideoItem';

function SearchResultList({ videos, onVideoSelect}) {
    return (
        <div style={{display: "flex", 
            flexDirection: "column", 
            justifyContent: "center", 
            alignItems: "center",
            padding: 10}}>
            {videos.map((video) => (
                <VideoItem 
                    key={video.id.videoId} 
                    video={video}
                    onVideoSelect={onVideoSelect}
                />
            ))}
        </div>
    )
};

export default SearchResultList;