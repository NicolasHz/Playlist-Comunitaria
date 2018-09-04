import React from 'react';
import VideoListItem from './VideoListItem/VideoListItem'

const videoList = (props) => {
    let playList;
    if(props.playList) {
        playList = props.playList.map( video => (<VideoListItem key={video.videoURL} videoTitle={video.title} videoURL={video.videoURL}/>))
    } else {
        playList = null;
    }
    return (
        <div style={{textAlign: 'center'}}>
            {playList}
        </div>
    );
}

export default videoList;