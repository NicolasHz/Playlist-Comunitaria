import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as classes from './Layout.css';
import VideoList from '../../components/VideoList/VideoList';
import { getUserIP } from '../../shared/utility';

class Layout extends Component {

    state = {
        perspectiveClasses: [classes.Perspective, classes.EffectRotateLeft]
    }
    
    showMenuHandler = (event) => {
        getUserIP(ip => console.log(ip));
        const updatedPerspectiveClasses = this.state.perspectiveClasses.slice();
        event.stopPropagation();
        event.preventDefault();
        updatedPerspectiveClasses.push(classes.Modalview)
        this.setState({perspectiveClasses: updatedPerspectiveClasses})
        updatedPerspectiveClasses.push(classes.animate);
        this.setState({perspectiveClasses: updatedPerspectiveClasses});

    }

    hideMenuHandler = (event) => {
        event.stopPropagation();
        event.preventDefault();
        const updatedPerspectiveClasses = this.state.perspectiveClasses.slice();
        let classIndex = updatedPerspectiveClasses.indexOf(classes.animate);
        
        if (classIndex !== -1) {
            updatedPerspectiveClasses.splice(classIndex, 1);
            this.setState({perspectiveClasses: updatedPerspectiveClasses});
        };
        setTimeout( () => {
            classIndex = updatedPerspectiveClasses.indexOf(classes.Modalview);
            if (classIndex !== -1) {
                updatedPerspectiveClasses.splice(classIndex, 1);
                this.setState({perspectiveClasses: updatedPerspectiveClasses});
            };
        }, 400 );
    }

    render() {
        return (
            <div id="perspective" className={this.state.perspectiveClasses.join(' ')}>
                <div className={classes.Container} onClick={this.hideMenuHandler}>
                    <div className={classes.Wrapper} style={{top: 0}}>
                        <div className={classes.MenuButtonWrapper}>
                            <button className={classes.ShowMenu} onClick={this.showMenuHandler} id="showMenu">View List</button>
                        </div>
                        <div>
                            {this.props.children}
                        </div>
                    </div>
                </div>
                <nav className={[classes.OuterNav, classes.vertical].join(' ')} style={{right: '3%'}}>
                    <VideoList currentVideoURL={this.props.currentVideoURL}/>
                </nav>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        currentVideoURL: state.video.currentVideoURL
    }
};


export default connect(mapStateToProps, null)(Layout);