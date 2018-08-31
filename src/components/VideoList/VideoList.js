import React from 'react';
import VideoListItem from './VideoListItem/VideoListItem'

const youtubeParser = (url) => {
    const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
    const match = url.match(regExp);
    return (match&&match[7].length===11)? match[7] : false;
}

const videoList = (props) => {
    return (
        <div>
        <VideoListItem currentVideoURL={youtubeParser(props.currentVideoURL)}/>
        <VideoListItem currentVideoURL={youtubeParser(props.currentVideoURL)}/>
        <VideoListItem currentVideoURL={youtubeParser(props.currentVideoURL)}/>
        <VideoListItem currentVideoURL={youtubeParser(props.currentVideoURL)}/>
        <VideoListItem currentVideoURL={youtubeParser(props.currentVideoURL)}/>
        </div>
    );
}

export default videoList;