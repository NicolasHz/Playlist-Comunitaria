import React from 'react';
import YouTube from 'react-youtube';
import * as classes from './Video.css';
const video = (props) => {

    const youtubeParser = (url) => {
        const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
        const match = url.match(regExp);
        return (match&&match[7].length===11)? match[7] : false;
    }
    return (
        <div className={classes.Video} >
        <YouTube
            videoId={youtubeParser(props.currentVideoURL)}
            opts={props.youtubeOpts}
            onReady={(target) => console.log(target.target.j.videoData.title)}
        />
        </div>
    )
}

export default video;
