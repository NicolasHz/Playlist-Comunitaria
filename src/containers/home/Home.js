import React, { PureComponent } from 'react';
import Video from '../../components/Video/Video';
import { connect } from 'react-redux';

class Home extends PureComponent {

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
            <Video youtubeOpts={this.getYutubeOpt()} currentVideoURL={this.props.currentVideoURL}/>
        )
    }
}

const mapStateToProps = state => {
    return {
        currentVideoURL: state.video.currentVideoURL
    }
};

export default connect(mapStateToProps, null)(Home);