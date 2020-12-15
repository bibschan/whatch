import React from 'react';
import CardList from './components/CardList/CardList';
import Login from './components/Login/Login';
import Header from './elements/Header/Header';
import Matches from './components/Matches/Matches';
import Profile from './components/Profile/Profile';
import Show from './components/Show/Show';
import './scss/App.css';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Divider from '@material-ui/core/Divider';



class App extends React.Component {

  state = {
    userId: 2,
    groupId: 1,
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
          <Divider variant='middle'/>
            <Switch>
              <Route path='/matches/:id' component={Show}/> 
              <Route path='/matches'> <Matches groupId={this.state.groupId}/> </Route> 
              {/* <Route path='/profile/modify'> <ModifyGroup /> </Route> */}
              <Route path='/profile'> <Profile groupId={this.state.groupId} userId={this.state.userId}/> </Route>
              <Route path='/'> {this.state.authenticated && <CardList {...this.state} />} </Route>
            </Switch>
          </Router>
        </div>
      );
  }

}

export default App;
