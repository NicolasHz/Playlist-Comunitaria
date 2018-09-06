import React, { Component } from 'react';
import * as classes from './Home.css'
import Input from '../../components/UI/Input/Input'
import { updateObject, checkValidity } from '../../shared/utility';
import Auxiliar from '../../hoc/Auxiliar/Auxiliar'
import * as Waves from '../../components/UI/Wave/Wave'
// Redux
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
// Utility
import { getUserIP } from '../../shared/utility';
// Firebase
import FireApp from '../../firebase-config/config';
class Home extends Component {

    constructor() {
        super();
        getUserIP(ip => {
            this.setState({ authorId: ip });
        });
        this.state = {
            authorId: null,
            playListForm: {
                playListName: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'text',
                        placeholder: 'Playlist Name'
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

        const updatedFormElement = updateObject(this.state.playListForm[inputIdentifier], {
            value: event.target.value,
            valid: checkValidity(event.target.value, this.state.playListForm[inputIdentifier].validation),
            touched: true,
            label: checkValidity(event.target.value, this.state.playListForm[inputIdentifier].validation)? '' : 'Field Required'
        });
        const updatedPlayListForm = updateObject(this.state.playListForm, {
            [inputIdentifier]: updatedFormElement
        });

        let formIsValid = true;
        for (let inputIdentifier in updatedPlayListForm) {
            formIsValid = updatedPlayListForm[inputIdentifier].valid && formIsValid;
        }
        this.setState({ playListForm: updatedPlayListForm, formIsValid: formIsValid });
    }

    onCreatePlayListHandler = (event) => {
        event.preventDefault();
        const playListToCreate = {
            playListName: this.state.playListForm.playListName.value,
            author: {
                name: this.state.playListForm.authorName.value,
                id: this.state.authorId
            }
        }
        FireApp.database().ref(playListToCreate.playListName).once('value')
            .then(snapshot => {
                if(!snapshot.exists()) {
                    this.props.onCreatePlaylist(playListToCreate)
                } else {
                    this.setState(prevState => ({
                        ...prevState,
                        playListForm: {
                            ...prevState.playListForm,
                            playListName: {
                                ...prevState.playListForm.playListName,
                                label: 'This playlist name already exists..',
                                valid: false
                            }
                        }
                    }));
                }
            });
    }

    componentDidMount() {
        Waves.init();
    }

    render() {
        const formElementsArray = [];
        for (let key in this.state.playListForm) {
            formElementsArray.push({
                id: key,
                config: this.state.playListForm[key]
            });
        }
        let form = (
            <form onSubmit={this.onCreatePlayListHandler}>
                {formElementsArray.map(formElement => (
                    <Input
                        key={formElement.id}
                        elementType={formElement.config.elementType}
                        elementConfig={formElement.config.elementConfig}
                        value={formElement.config.value}
                        invalid={!formElement.config.valid}
                        shouldValidate={formElement.config.validation}
                        touched={formElement.config.touched}
                        label= {formElement.config.label}
                        changed={(event) => this.inputChangedHandler(event, formElement.id)} />
                ))}
                <button onClick={this.onCreatePlayListHandler} disabled={!this.state.formIsValid}>Create</button>
            </form>
        );
        return (
            <Auxiliar>
                <canvas id="canvas"></canvas>
                <div id="Home" style={{ backgroundColor: 'black' }} />
                <div className={classes.Home}>
                    <h2 className={classes.Title}>Create your PlayList!</h2>
                    {form}
                </div>
            </Auxiliar>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onCreatePlaylist: (playListToCreate) => dispatch(actions.createPlayList(playListToCreate))
    }
}

export default connect(null, mapDispatchToProps)(Home)
