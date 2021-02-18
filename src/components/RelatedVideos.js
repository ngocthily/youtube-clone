import React from 'react';
import VideoItem from 'components/VideoItem';

function RelatedVideos({videos, onVideoSelect, smallTitle}) {
    return (
        <div>
            {videos.map((video) => (
                    <VideoItem
                        key={video.id.videoId}
                        video={video}
                        onVideoSelect={onVideoSelect}
                        smallTitle={smallTitle}
                    />
            ))}
        </div>
    )
};

export default RelatedVideos;