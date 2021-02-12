import React from 'react';

function SelectedVideo ({ video }) {
    if (!video) { return null }

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

    return (
        <div>
            <iframe title="video player" src={videoSrc}/>
            <div>
                {video.snippet.title}
            </div>
            <div>
                {video.snippet.description}
            </div>
        </div>
    )
};

export default SelectedVideo;