import React, { PureComponent } from 'react';
import Video from '../../components/Video/Video';

class Home extends PureComponent {
    
    state = {
        currentVideoURL: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
    }

    getYutubeOpt = () => {
        return {
            height: '50%',
            width: '60%',
            playerVars: { // https://developers.google.com/youtube/player_parameters
              autoplay: 1,
              start:0.1,
              controls: 0,
              disablekb: 1,
              fs: 1,
              rel:0,
              enablejsapi: 1
            }
          };
    }
    
    render() {
        return (
            <Video youtubeOpts={this.getYutubeOpt()} currentVideoURL={this.state.currentVideoURL}/>
        )
    }
}

export default Home;