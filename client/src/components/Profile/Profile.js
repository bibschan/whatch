import React from 'react';
import axios from 'axios';
import {Link, Route, Switch} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import ModifyGroup from '../ModifyGroup/ModifyGroup';
import CreateGroup from '../CreateGroup/CreateGroup';

class Profile extends React.Component {
    state = {
        groupName: '',
        groupMembers: [],
        groupMembersObjects: []
    }
    
    modifyGroupName = (name) => {
        if(name !== '') {
            axios({
                method: 'patch',
                url: `http://localhost:3000/groups/${this.props.groupId}`,
                data: {
                  groupName: name
                }
              })
              .then( response => this.setState({ groupName: response.data.data }))
              .catch( error => console.log(error));
        } 
    }

    getGroupInfo(){
        axios
        .get(`http://localhost:3000/groups/${this.props.groupId}`)
        .then( response => this.setState({ groupName: response.data.data.groupName }))
        .catch( error => console.log(error) )
    }

    getGroupMembers(){
        axios
        .get(`http://localhost:3000/usergroups/${this.props.groupId}`)
        .then( response => this.setState({
            groupMembers: response.data.data
        }))
        .catch( error => console.log(error))

    }

    getGroupMembersNames(){
        let userNames = this.state.groupMembers.map((element) => element.userIdFK);
        userNames = userNames.filter(element => element !== this.props.userId);

        userNames.map(element => 
        axios
        .get(`http://localhost:3000/users/${element}`)
        .then( response =>  this.setState({ groupMembersObjects: [...this.state.groupMembersObjects, response.data.data]}))
        .catch( error => console.log(error)))

        
    }

    componentDidMount(){
        this.getGroupInfo();
        this.getGroupMembers();
        setTimeout(() =>this.getGroupMembersNames(), 500);
    }

    render() {
        return(
            <div className='profile'>
                <h1>Profile</h1>
                <Link to='/profile'> <Button variant="outlined" color="primary">Main Profile</Button></Link>
                <Link to='/profile/modify'> <Button variant="outlined" color="primary"> Update Group Name </Button></Link>
                <Link to='/profile/create'> <Button variant="outlined" color="primary"> Create New Group</Button></Link>

                    <Switch>
                        <Route path='/profile/create'> <CreateGroup /> </Route>
                        <Route path='/profile/modify'> <ModifyGroup groupName={this.state.groupName} modifyGroupName={this.modifyGroupName}/> </Route>
                        <Route exact path='/profile'> <p>You're a member of <b>{this.state.groupName}</b> along with {this.state.groupMembersObjects.map((element) => ( <span key={element.id}>{element.firstName} {element.lastName} </span> ))} </p>  </Route>
                    </Switch>
            </div>
        )
    }
}
export default Profile;