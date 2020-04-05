import React, { Component } from 'react';
import './App.css';
import CardList from './components/CardList';
import Form from './components/Form';

export default class App extends Component {
  state = {
    profiles: []
  }
  addNewProfile = (profileData) => {
    // console.log("From App", profileData);
    this.setState({
      profiles: [...this.state.profiles, profileData]
    });
    console.log(this.state.profiles);
  }
  render() {
    return (
      <div>
        <h2>The github Card App</h2>
        <Form onSubmit={this.addNewProfile} />
        <CardList profiles = {this.state.profiles}/>
      </div>
    )
  }
}
