import React from 'react';
import VideoItem from 'components/VideoItem';

function SearchResultList({ videos, onVideoSelect, smallTitle, selectVideoIdx}) {
    return (
        <div style={{display: "flex", 
            flexDirection: "column", 
            justifyContent: "center", 
            alignItems: "center",
            padding: 10}}>
            {videos.map((video,idx) => (
                idx !== selectVideoIdx ?
                <VideoItem 
                    key={video.id.videoId} 
                    video={video}
                    onVideoSelect={onVideoSelect}
                    smallTitle={smallTitle}
                /> : null
            ))}
        </div>
    )
};

export default SearchResultList;