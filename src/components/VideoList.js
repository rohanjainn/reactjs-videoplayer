import React from 'react';
import VideoItem from './VideoItem';

const VideoList=({videos,onVideoSelect})=>{

    const rendervideolist=videos.map(video=>{
        console.log(video)
        return (
            <VideoItem key={video.snippet.title} onVideoSelect={onVideoSelect} video={video}/>
        );
    }); 

    return <div className="ui relaxed divided list">{rendervideolist}</div>
};

export default VideoList;