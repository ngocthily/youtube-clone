import axios from 'axios';
const KEY = 'AIzaSyBr3cPrptWuEDL_Q16QBqD03tQQhPbxn2g';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/', 
    params: {
        part: 'snippet',
        maxResults: 10,
        type: 'video',
        key: KEY
    }
});