import React, { Component } from 'react';
import * as classes from './VideoForm.css'
import Input from '../UI/Input/Input'
import { updateObject, checkValidity } from '../../shared/utility';
// Redux
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
// Utility
import { getUserIP } from '../../shared/utility';
// Firebase
import FireApp from '../../firebase-config/config';

class VideoForm extends Component {
    constructor() {
        super();
        getUserIP(ip => {
            this.setState({ authorId: ip });
        });
        this.state = {
            authorId: null,
            videoForm: {
                videoURL: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'text',
                        placeholder: 'Video URL'
                    },
                    value: '',
                    validation: {
                        required: true
                    },
                    valid: false,
                    touched: false,
                    label: ''
                },
                authorName: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'text',
                        placeholder: 'Your Name'
                    },
                    value: '',
                    validation: {
                        required: true
                    },
                    valid: false,
                    touched: false,
                    label: ''
                }
            },
            formIsValid: false
        }
    }

    inputChangedHandler = (event, inputIdentifier) => {

        const updatedFormElement = updateObject(this.state.videoForm[inputIdentifier], {
            value: event.target.value,
            valid: checkValidity(event.target.value, this.state.videoForm[inputIdentifier].validation),
            touched: true,
            label: checkValidity(event.target.value, this.state.videoForm[inputIdentifier].validation) ? '' : 'Field Required'
        });
        const updatedvideoForm = updateObject(this.state.videoForm, {
            [inputIdentifier]: updatedFormElement
        });

        let formIsValid = true;
        for (let inputIdentifier in updatedvideoForm) {
            formIsValid = updatedvideoForm[inputIdentifier].valid && formIsValid;
        }
        this.setState({ videoForm: updatedvideoForm, formIsValid: formIsValid });
    }

    onAddVideoToPlayListHandler = (event) => {
        event.preventDefault();
        const videoToAdd = {
            videoURL: this.state.playListForm.videoURL.value,
            author: {
                name: this.state.playListForm.authorName.value,
                id: this.state.authorId
            }
        }
        console.log(videoToAdd)
        // FireApp.database().ref(videoToAdd.videoURL).once('value')
        //     .then(snapshot => {
        //         if(!snapshot.exists()) {
        //             this.props.onCreatePlaylist(videoToAdd)
        //         } else {
        //             this.setState(prevState => ({
        //                 ...prevState,
        //                 playListForm: {
        //                     ...prevState.playListForm,
        //                     videoURL: {
        //                         ...prevState.playListForm.videoURL,
        //                         label: 'This playlist name already exists..',
        //                         valid: false
        //                     }
        //                 }
        //             }));
        //         }
        //     });
    }

    render() {
        const formElementsArray = [];
        for (let key in this.state.videoForm) {
            formElementsArray.push({
                id: key,
                config: this.state.videoForm[key]
            });
        }
        let form = (
            <form onSubmit={this.onAddVideoToPlayListHandler}>
                {formElementsArray.map(formElement => (
                    <Input
                        key={formElement.id}
                        elementType={formElement.config.elementType}
                        elementConfig={formElement.config.elementConfig}
                        value={formElement.config.value}
                        invalid={!formElement.config.valid}
                        shouldValidate={formElement.config.validation}
                        touched={formElement.config.touched}
                        label={formElement.config.label}
                        changed={(event) => this.inputChangedHandler(event, formElement.id)} />
                ))}
                <button className={classes.VideoFormBtn} onClick={this.onCreatePlayListHandler} disabled={!this.state.formIsValid}>Add To Playlist</button>
            </form>
        );
        return form;
    }
}

export default VideoForm;
