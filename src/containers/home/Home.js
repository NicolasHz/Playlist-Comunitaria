import React, { Component } from 'react';
import Input from '../../components/UI/Input/Input'
import * as classes from './Home.css'
import { updateObject, checkValidity } from '../../shared/utility';
import Auxiliar from '../../hoc/Auxiliar/Auxiliar'
import * as Waves from '../../components/UI/Wave/Wave'
class Home extends Component {

    state = {
        orderForm: {
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
                touched: false
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
                touched: false
            }
        },
        formIsValid: false
    }

    inputChangedHandler = (event, inputIdentifier) => {
        
        const updatedFormElement = updateObject(this.state.orderForm[inputIdentifier], {
            value: event.target.value,
            valid: checkValidity(event.target.value, this.state.orderForm[inputIdentifier].validation),
            touched: true
        });
        const updatedOrderForm = updateObject(this.state.orderForm, {
            [inputIdentifier]: updatedFormElement
        });
        
        let formIsValid = true;
        for (let inputIdentifier in updatedOrderForm) {
            formIsValid = updatedOrderForm[inputIdentifier].valid && formIsValid;
        }
        this.setState({orderForm: updatedOrderForm, formIsValid: formIsValid});
    }

    componentDidMount(){
        Waves.init();
    }

    render() {
        const formElementsArray = [];
        for (let key in this.state.orderForm) {
            formElementsArray.push({
                id: key,
                config: this.state.orderForm[key]
            });
        }
        let form = (
            <form onSubmit={this.orderHandler}>
                {formElementsArray.map(formElement => (
                    <Input
                        key={formElement.id}
                        elementType={formElement.config.elementType}
                        elementConfig={formElement.config.elementConfig}
                        value={formElement.config.value}
                        invalid={!formElement.config.valid}
                        shouldValidate={formElement.config.validation}
                        touched={formElement.config.touched}
                        changed={(event) => this.inputChangedHandler(event, formElement.id)} />
                ))}
                <button disabled={!this.state.formIsValid}>Create</button>
            </form>
        );
        return (
            <Auxiliar>
                <canvas id="canvas"></canvas>
                <div id="Home" className={classes.Home}>
                    <h2 className={classes.Title}>Create your PlayList!</h2>
                    {form}
                </div>
            </Auxiliar>
        );
    }
}

export default Home
