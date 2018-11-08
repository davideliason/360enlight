import React, { Component } from 'react';
import './App.css';
import Signup from './Sign-up.js'

class App extends Component {
  state = {users: []}

  componentDidMount() {
    fetch('/api/users')
      .then(res => res.json())
      .then(users => this.setState({ users }));
  }

  render() {
    return (
      <div className="App">
         <h1>360enlight</h1>
         <p>Be present even when you are far away</p>
        <h3>Users</h3>
        {this.state.users.map(user =>
          <div key={user.id}>{user.name} says '{user.text}'</div>
        )}
        <Signup />
      </div>
    );
  }
}

export default App;