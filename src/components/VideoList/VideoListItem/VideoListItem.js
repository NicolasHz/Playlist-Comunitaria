import React from 'react';
import * as classes from './VideoListItem.css' 
import {youtubeParser} from '../../../shared/utility'

const videoListItem = (props) => {
    return (
        <span className={classes.VideoListItem}>
            <div className={classes.ThumbNail} style={{backgroundImage: 'url(//img.youtube.com/vi/' + youtubeParser(props.videoURL) + '/0.jpg)'}}/>
            <div className={classes.Description}>
                <p>{props.videoTitle}</p>
            </div>
        </span>
    );
}

export default videoListItem;