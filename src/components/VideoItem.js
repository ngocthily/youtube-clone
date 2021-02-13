import React from 'react';

function VideoItem({ video, onVideoSelect, smallTitle }) {
    return (
        <div onClick={() => onVideoSelect(video)}
            style={{display: "flex", 
            flexDirection: "row",
            cursor: "pointer",
            maxWidth: "100%"}}>
            <div>
                <img src={video.snippet.thumbnails.medium.url} 
                    alt={video.snippet.title}
                    style={{maxWidth: "100%"}}/>
            </div>
            <div style={ smallTitle? 
                {width: "10vw", marginLeft: 10} : 
                {width: "75vw", marginLeft: 10}}>
                <p style={ smallTitle?
                    {fontSize: "1.1vw",
                    fontWeight: 500} :
                    {fontSize: "1.5vw", 
                    fontWeight: "bold"}}> 
                    {video.snippet.title} 
                </p>
                { !smallTitle ?
                    <p style={{fontSize: "1vw"}}> 
                        {video.snippet.description} 
                    </p> : null
                }
            </div>
        </div>
    )
};

export default VideoItem;