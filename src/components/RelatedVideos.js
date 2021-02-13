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
        });
        
        // setRelatedVideos(response.data.items);
        // console.log(response.data.items)
        // snippet is only showing up for selected, super annoying
        // tried using the APIs Explorer to call API and does the same thing
    }, []);

    return (
        <div>
        </div>
    )
};

export default RelatedVideos;