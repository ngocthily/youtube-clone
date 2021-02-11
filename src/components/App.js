import React, { useState } from 'react';
import youtube from 'apis/youtube';
import SearchBar from 'components/SearchBar';
import SearchResultList from 'components/SearchResultList';

function App() {
    const [videos, setVideos] = useState([]);

    const handleSubmit = async (keyword) => {
        const response = await youtube.get("/search", {
            params: {
                q: keyword
            }
        });
        
        setVideos(response.data.items);
    };

    return (
        <div>
            <div>
                <SearchBar searchHandleSubmit={handleSubmit}/>
            </div>
            <div>
                <SearchResultList videos={videos}/>
            </div>
        </div>
    )
}

export default App;