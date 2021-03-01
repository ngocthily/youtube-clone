import React from 'react';
import VideoItem from 'components/VideoItem';

function SearchResultList({ videos, onVideoSelect}) {
    return (
        <div>
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