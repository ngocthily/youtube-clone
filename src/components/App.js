import React, { useState } from 'react';
import youtube from 'apis/youtube';
import SearchBar from 'components/SearchBar';
import SearchResultList from 'components/SearchResultList';
import SelectedVideo from 'components/SelectedVideo';
import logo from 'images/youtube_logo.svg';
import githubIcon from 'images/github_icon.svg';
import linkedinIcon from 'images/linkedin_icon.svg';
import profileIcon from 'images/profile_icon.jpg';
import { Grid, Box } from '@material-ui/core';

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

        // when an user selects a video we will show it as a video player instead
        // so we must remove it from the videos' list
        const idxOfSelectedVideo = videos.indexOf(video);
        if (idxOfSelectedVideo > -1) {
            videos.splice(idxOfSelectedVideo, 1)
        } 
        setVideos(videos);
    };

    return (
        <div>
            <div>
                <Grid container 
                    direction="row"
                    justify="space-evenly"
                    alignItems="center">
                <div>
                    <img src={logo} 
                        width={120}
                        alt="YouTube Logo"/>
                </div>
                <div><SearchBar onHandleSubmit={handleSubmit} /></div>
                <div>
                    <a href="https://github.com/ngocthily"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{margin: 5}}>
                        <img src={githubIcon} 
                            alt="Github Icon"/>
                    </a>
                    <a href="https://www.linkedin.com/in/ngocthily/"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ margin: 5 }}>
                        <img src={linkedinIcon}
                            width={33}
                            alt="LinkedIn Icon"/>
                    </a>
                    <a href="https://ngocthily.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ margin: 5 }}>
                            <img src={profileIcon}
                                width={36}
                                alt="Profile Icon"
                                style={{borderRadius: "50%"}}/>
                    </a>
                </div>
                </Grid>
            </div>
            <div>
                <SelectedVideo video={video}/>
                <SearchResultList
                    onVideoSelect={selectVideo}
                    videos={videos}
                />
            </div>
        </div>
    )
}

export default App;