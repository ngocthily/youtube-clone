import axios from 'axios';
const KEY = 'AIzaSyBkd7MylnNERY9yxcKgGd9gO2Du3dSDq9I';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3', 
    params: {
        part: 'snippet',
        maxResults: 5,
        type: 'video',
        key: KEY
    }
});