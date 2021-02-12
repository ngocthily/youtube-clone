import React from 'react';
import VideoItem from 'components/VideoItem';

function SearchResultList({ videos, onVideoSelect }) {
    return (
        <div>
            <div>
                {videos.map((video,idx) => (
                    <VideoItem 
                        key={video.id.videoId} 
                        video={video}
                        onVideoSelect={onVideoSelect}
                    />
                ))}
            </div>
        </div>
    )
};

export default SearchResultList;