import React, { useEffect, useState } from 'react';
import youtube from 'apis/youtube';

function SelectedVideo ({ video }) {
    const [viewCount, setViewCount] = useState('');

    useEffect(async () => {
        const videoId = video.id.videoId;
        const response = await youtube.get("/videos", {
            params: {
                part: 'statistics',
                id: videoId
            }
        });
        const videoViewCount = response.data.items[0].statistics.viewCount;
        setViewCount(videoViewCount);
    }, [])

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

    return (
        <div>
            <div>
                <div>
                    <iframe title="video player" 
                        src={videoSrc} 
                        frameBorder="0"
                        allow="encrypted-media" 
                        allowFullScreen/>
                </div>
            </div>
            <div>
                <p>{video.snippet.title}</p>
                <p>{viewCount} views</p>
                <p>{video.snippet.description}</p>
            </div>
        </div>
    )
};

export default SelectedVideo;