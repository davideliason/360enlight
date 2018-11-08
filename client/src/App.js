import React, { Component } from 'react';
import './App.css';

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
         <h3>360enlight</h3>
         <p>Be present even when you are far away</p>
        <h1>Users</h1>
        {this.state.users.map(user =>
          <div key={user.id}>{user.name} says '{user.text}'</div>
        )}
      </div>
    );
  }
}

export default App;