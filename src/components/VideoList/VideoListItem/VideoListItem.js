import React from 'react';
import * as classes from './VideoListItem.css' 

const videoListItem = (props) => {
    return (
        <span className={classes.VideoListItem}>
            <div className={classes.ThumbNail}/>
            <div className={classes.Description}>
                <p>Cancion</p>
            </div>
        </span>
    );
}

export default videoListItem;