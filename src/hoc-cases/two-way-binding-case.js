import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {twoWayBindingHOC} from '../decorators';

@twoWayBindingHOC
class CustomInput extends Component {
    render() {
        return (
            <input {...this.props}/>
        );
    }
}

class CustomForm extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            model: props.model || {}
        };
    }

    // todo should change this example code to new lifecycle
    UNSAFE_componentWillReceiveProps(nextProps) {
        if (nextProps.model) {
            this.setState({
                model: nextProps.model
            });
        }
    }

    changeModel = (name, value) => {
        this.setState({
            model: {...this.state.model, [name]: value}
        });
    }

    getChildContext() {
        return {
            changeModel: this.changeModel,
            model: this.props.model || this.state.model
        };
    }

    onSubmit = () => {
        console.log(this.state.model);
    }

    render() {
        return (
            <div>
                {this.props.children}
                <button onClick={this.onSubmit}>Submit</button>
            </div>
        );
    }
}

CustomForm.propTypes = {
    model: PropTypes.object,
    children: PropTypes.object
};

export class TwoWayBindingCase extends Component {
    render() {
        return (
            <CustomForm>
                <CustomInput model="user-name"/>
            </CustomForm>
        );
    }
}
