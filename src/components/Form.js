import React, { Component } from 'react';
import axios from 'axios';

export default class Form extends Component {
    url = `https://api.github.com/users/`;
    state = {
        userName: '',
    };
    handleChange = (event) => {
        this.setState({
            userName: event.target.value
        });
        // console.log(this.state.userName);
    }
    handleSubmit = async (event) => {
        event.preventDefault();
        // console.log(this.state.userName);
        const response = await axios.get(this.url + this.state.userName);
        this.props.onSubmit(response.data);
        this.setState({
            userName: ''
        })
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit} className="formData">
                <input
                    type="text"
                    placeholder="github username"
                    value={this.state.userName}
                    onChange={this.handleChange}
                />
                <button>add card</button>
            </form>
        )
    }
}
