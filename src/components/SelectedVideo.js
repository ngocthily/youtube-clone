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
        <div style={{paddingTop: 30}}>
            <div style={{ width: "60vw"}}>
                <div style={{ position: "relative", overflow: "hidden", paddingTop: "56.25%"}}>
                    <iframe title="video player" 
                        src={videoSrc} 
                        frameBorder="0"
                        gesture="media" 
                        allow="encrypted-media" 
                        allowFullScreen
                        style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            border: 0,
                        }}/>
                </div>
            </div>
            <div>
                <p style={{
                    fontSize: "1.8vw",
                    fontWeight: "bold"}}>
                    {video.snippet.title}
                </p>
                <p style={{ fontSize: "1.2vw" }}>
                    {viewCount} views
                </p>
                <p style={{ fontSize: "1vw" }}>
                    {video.snippet.description}
                </p>
            </div>
        </div>
    )
};

export default SelectedVideo;