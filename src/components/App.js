import React, { useState } from 'react';
import youtube from 'apis/youtube';
import SearchBar from 'components/SearchBar';
import SearchResultList from 'components/SearchResultList';

function App() {
    const [videos, setVideos] = useState([]);
    const [video, setVideo] = useState(null);

    const handleSubmit = async (keyword) => {
        const response = await youtube.get("/search", {
            params: {
                q: keyword
            }
        });
        
        setVideos(response.data.items);
    };

    const selectVideo = (video) => {
        setVideo(video);
    };

    return (
        <div>
            <div>
                <SearchBar onHandleSubmit={handleSubmit}/>
            </div>
            <div>
                {!video ?
                    <SearchResultList
                        onVideoSelect={selectVideo}
                        videos={videos}
                    /> :
                    null
                    // this is where I will put the individual video
                }
            </div>
        </div>
    )
}

export default App;