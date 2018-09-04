import React from 'react';
import YouTube from 'react-youtube';
import * as classes from './Video.css';
import {youtubeParser} from '../../shared/utility'

const video = (props) => {
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

//usar esto para agarrar la data "http://www.youtube.com/oembed?url=". $url ."&format=json"

export default video;
