import React from 'react';
import * as classes from './VideoListItem.css' 

const videoListItem = (props) => {
    return (
        <span className={classes.VideoListItem}>
            <div className={classes.ThumbNail} style={{backgroundImage: 'url(//img.youtube.com/vi/' + props.currentVideoID + '/0.jpg)'}}/>
            <div className={classes.Description}>
                <p>Song Title</p>
            </div>
        </span>
    );
}

export default videoListItem;