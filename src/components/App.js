import React, { useState } from 'react';
import youtube from 'apis/youtube';
import SearchBar from 'components/SearchBar';
import SearchResultList from 'components/SearchResultList';
import SelectedVideo from 'components/SelectedVideo';
import RelatedVideos from 'components/RelatedVideos';
import logo from 'images/youtube_logo.svg';
import githubIcon from 'images/github_icon.svg';
import linkedinIcon from 'images/linkedin_icon.svg';
import profileIcon from 'images/profile_icon.jpg';

function App() {
    const [videos, setVideos] = useState([]);
    const [video, setVideo] = useState(null);
    const [smallTitle, setSmallTitle] = useState(false);
    const [relatedVideos, setRelatedVideos] = useState([]);

    const handleSubmit = async (keyword) => {
        setVideo(null);
        
        const response = await youtube.get("/search", {
            params: {
                q: keyword
            }
        });
        
        setVideos(response.data.items);
    };

    const getRelatedVideos = async (video) => {
        const videoId = video.id.videoId;
        const response = await youtube.get("/search", {
            params: {
                relatedToVideoId: videoId
            }
        });

        let videos = response.data.items.filter(video => video.snippet);

        setRelatedVideos(videos);
    };

    const selectVideo = (video) => {
        setVideo(video);
        setSmallTitle(!smallTitle);
        getRelatedVideos(video);
    };

    return (
        <div>
            <div>
                <div>
                    <img src={logo} 
                        alt="YouTube Logo"
                        onClick={() => window.location.reload()}
                        style={{cursor: "pointer"}}/>
                </div>
                <div><SearchBar onHandleSubmit={handleSubmit}/></div>
                <div>
                    <a href="https://github.com/ngocthily"
                        target="_blank"
                        rel="noopener noreferrer">
                        <img src={githubIcon} 
                            alt="Github Icon"/>
                    </a>
                    <a href="https://www.linkedin.com/in/ngocthily/"
                        target="_blank"
                        rel="noopener noreferrer">
                        <img src={linkedinIcon}
                            alt="LinkedIn Icon"/>
                    </a>
                    <a href="https://ngocthily.com"
                        target="_blank"
                        rel="noopener noreferrer">
                            <img src={profileIcon}
                                alt="Profile Icon"/>
                    </a>
                </div>
            </div>
            <div>
                {videos.length !== 0 || relatedVideos.length !== 0 ? 
                    <div>
                        { video ? 
                        <div>
                            <SelectedVideo video={video} /> 
                             <RelatedVideos videos={relatedVideos}
                                    onVideoSelect={selectVideo}
                                    smallTitle={smallTitle}/>
                        </div> :
                            <SearchResultList
                                onVideoSelect={selectVideo}
                                videos={videos}
                            /> }
                    </div> :
                    <div>
                        <div> 
                            <h1>Welcome to my YouTube clone!</h1>
                        </div>
                        <div>
                            <ul>
                                <h4>Quick and easy instructions on how to use:</h4>
                                <li>Click on YouTube logo anytime you want to reload the page</li>
                                <li>Search for videos by typing in the search bar and hitting enter or clicking the search button</li>
                            </ul>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

export default App;