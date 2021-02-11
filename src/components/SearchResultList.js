import React from 'react';
import VideoItem from 'components/VideoItem';

const SearchResultList = ({ videos }) => {
    return (
        <div>
            <div>
                {videos.map((video,idx) => (
                    <VideoItem key={idx} video={video}/>
                ))}
            </div>
        </div>
    )
};

export default SearchResultList;