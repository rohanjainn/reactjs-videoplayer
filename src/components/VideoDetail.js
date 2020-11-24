import react from 'react';

const VideoDetail=({video})=>{

    if(!video){
        return <div>Loading...</div>
    }

    const videoSrc=`https://www.youtube.com/embed/${video.id.videoId}`;
    console.log(videoSrc)
    return(
        <div>
         <div className="ui embed">
            <iframe src={videoSrc} title="videoplayer"/>
         </div>
            <div className="ui segment">
                <h3>{video.snippet.title}</h3>
                <h4>Published at : {video.snippet.publishedAt}</h4>
                <p>{video.snippet.description}</p>
            </div>
        </div>
    )

};


export default VideoDetail;