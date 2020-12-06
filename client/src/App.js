import React from 'react';
import CardList from './components/CardList.js';
import Login from './components/Login';
import Header from './elements/Header';
import Matches from './components/Matches';
import './scss/App.css';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


class App extends React.Component {

  state = {
    userId: 0,
    groupId: 0,
    authenticated: true,
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
        {/* {!this.state.authenticated && <Login authenticateUser={this.authenticateUser} />} */}
        {/* LOADING SCREEN???? */}
          <Router>
          <Header />
            {/* my router is not working, doesn't render the matches / */}
            <Switch>
              <Route path='/matches' component={Matches} /> 
              {/* <Route path='/profile' component={Profile} /> */}
              <Route path='/'> {this.state.authenticated && <CardList {...this.state} />} </Route>
            </Switch>
          </Router>
        </div>
      );
  }

}

export default App;
