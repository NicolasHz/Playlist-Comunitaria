import React, { PureComponent } from 'react';
import Video from '../../components/Video/Video';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';

class Reproducer extends PureComponent {

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
        const video = this.props.currentVideoURL !== null ? (<Video  key='0' youtubeOpts={this.getYutubeOpt()} currentVideoURL={this.props.currentVideoURL} />) : null;
        return [video]
    }
}

const mapStateToProps = state => {
    return {
        currentVideoURL: state.video.currentVideoURL,
        playList: state.playList.playList
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onChangeCurrentVideoURL: (videoURL) => dispatch(actions.setCurrentVideo(videoURL)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Reproducer);