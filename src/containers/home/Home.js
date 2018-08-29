import React, { Component } from 'react';
import YouTube from 'react-youtube';
import * as classes from './Home.css';

class Home extends Component {
    
    state = {
        currentVideoURL: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
    }

    youtubeParser(url){
        var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
        var match = url.match(regExp);
        return (match&&match[7].length===11)? match[7] : false;
    }

    getYutubeOpt = () => {
        return {
            height: '50%',
            width: '60%',
            playerVars: { // https://developers.google.com/youtube/player_parameters
              autoplay: 1,
              start:0.1
            }
          };
    }
    
    render() {
        setTimeout(() => {
            this.setState({currentVideoURL: 'https://www.youtube.com/watch?v=AyOqGRjVtls'})
        }, 10000);
        return (
            <div className={classes.Video}>
                <YouTube
                    videoId={this.youtubeParser(this.state.currentVideoURL)}
                    opts={this.getYutubeOpt()}
                />
            </div>
        )
    }
}

export default Home;