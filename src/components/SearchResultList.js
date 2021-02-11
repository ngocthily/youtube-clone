import React from 'react';
import VideoItem from 'components/VideoItem';

const SearchResultList = ({ videos, onVideoSelect }) => {
    return (
        <div>
            <div>
                {videos.map((video,idx) => (
                    <VideoItem 
                        key={idx} 
                        video={video}
                        onVideoSelect={onVideoSelect}
                    />
                ))}
            </div>
        </div>
    )
};

export default SearchResultList;