import React from 'react';
import './scss/App.css';
import CardList from './components/CardList.js';
import Login from './components/Login';
import axios from 'axios';


class App extends React.Component {

  state = {
    userId: 0,
    groupId: 0,
    authenticated: false,
  }


  authenticateUser = (data) => {
    this.setState({
      authenticated: true,
      userId: data.id
    }); 

    axios
    .get(`http://localhost:3000/usergroups/${data.id}`)
    .then( response => this.setState({ groupId: response.data.data.groupIdFK}))
    .catch( error => console.log(error))
  }

  render() {
    return (
      <div className="app">
        {!this.state.authenticated && <Login authenticateUser={this.authenticateUser} />}
        {/* LOADING SCREEN???? */}
        {this.state.authenticated && <CardList {...this.state} />}
        </div>
      );
  }

}

export default App;
