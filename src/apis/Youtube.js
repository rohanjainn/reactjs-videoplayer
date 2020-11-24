import axios from 'axios'

const accessKey='AIzaSyC6UCyIn03IQiM8zojpAUiBB0gm6B1Fcnc';
console.log(accessKey)
export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        maxResults:10,
        key:accessKey
    }
});