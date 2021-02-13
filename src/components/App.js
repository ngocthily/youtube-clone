import React, { useState } from 'react';
import youtube from 'apis/youtube';
import SearchBar from 'components/SearchBar';
import SearchResultList from 'components/SearchResultList';
import SelectedVideo from 'components/SelectedVideo';
import logo from 'images/youtube_logo.svg';
import githubIcon from 'images/github_icon.svg';
import linkedinIcon from 'images/linkedin_icon.svg';
import profileIcon from 'images/profile_icon.jpg';
import yearOfOx from 'images/year_of_ox.png';
import { Grid } from '@material-ui/core';

function App() {
    const [videos, setVideos] = useState([]);
    const [video, setVideo] = useState(null);
    const [smallTitle, setSmallTitle] = useState(false);
    const [selectVideoIdx, setSelectVideoIdx] = useState(null);

    const handleSubmit = async (keyword) => {
        setVideo(null);
        setSelectVideoIdx(null);
        
        const response = await youtube.get("/search", {
            params: {
                q: keyword
            }
        });
        
        setVideos(response.data.items);
    };

    const selectVideo = (video) => {
        setVideo(video);
        setSmallTitle(!smallTitle);
        const idxOfSelectedVideo = videos.indexOf(video);
        setSelectVideoIdx(idxOfSelectedVideo);
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
                        width={100}
                        alt="YouTube Logo"
                        onClick={() => window.location.reload()}
                        style={{cursor: "pointer"}}/>
                </div>
                <div><SearchBar onHandleSubmit={handleSubmit}/></div>
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
                {videos.length !== 0 ? 
                    <div style={{display: "flex"}}>
                        { video ? 
                            <SelectedVideo video={video} /> :
                            null }
                        <SearchResultList
                            onVideoSelect={selectVideo}
                            videos={videos}
                            smallTitle={smallTitle}
                            selectVideoIdx={selectVideoIdx}
                        />
                    </div> :
                    <div style={{display: "flex", 
                        flexDirection: "column", 
                        alignItems: "center",
                        padding: 50}}>
                        <div style={{textAlign: "center"}}> 
                            <h1>Welcome to my YouTube clone!</h1>
                            <h2>(and the Year of the Ox)</h2>
                        </div>
                        <div>
                            <ul>
                                <h4>Quick and easy instructions on how to use:</h4>
                                <li>Click on YouTube logo anytime you want to reload the page</li>
                                <li>Search for videos by typing in the search bar and hitting enter or clicking the search button</li>
                            </ul>
                        </div>
                        <div style={{display: "flex", 
                            flexDirection: "column",
                            alignItems: "center",
                            padding: 25}}>
                            <img 
                                src={yearOfOx}
                                alt="Year of the Ox"
                                width={400}/>
                            <a href="https://lovepik.com/images/png-2021.html"
                                style={{fontSize: 14, color: "black"}}>
                                2021 Png vectors by Lovepik.com
                            </a>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

export default App;