import React, { useState, useEffect } from 'react';
import VideoItem from 'components/VideoItem';
import youtube from 'apis/youtube';
import { VideocamSharp } from '@material-ui/icons';

function RelatedVideos({video}) {
    const [relatedVideos, setRelatedVideos] = useState([]);

    useEffect(async () => {
        const videoId = video.id.videoId;
        const response = await youtube.get("/search", {
            params: {
                relatedToVideoId: videoId
            }
        }, setTimeout(10000));
        
        // setRelatedVideos(response.data.items);
        // console.log(response.data.items)
    }, []);

    return (
        <div>
        </div>
    )
};

export default RelatedVideos;