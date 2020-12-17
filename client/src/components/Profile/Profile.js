import React from 'react';
import axios from 'axios';
import {Link, Route, Switch} from 'react-router-dom';
// import Button from '@material-ui/core/Button';
import ModifyGroup from '../ModifyGroup/ModifyGroup';
import CreateGroup from '../CreateGroup/CreateGroup';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import AddIcon from '@material-ui/icons/Add';
import UndoIcon from '@material-ui/icons/Undo';

class Profile extends React.Component {
    state = {
        activeUser: '',
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

    getActiveUser(){
        axios
        .get(`http://localhost:3000/users/${this.props.userId}`)
        .then( response =>  this.setState({ activeUser: response.data.data.firstName }))
        .catch( error => console.log(error))
    }

    componentDidMount(){
        this.getGroupInfo();
        this.getActiveUser();
        this.getGroupMembers();
        setTimeout(() => this.getGroupMembersNames(), 500);
    }

    render() {
        return(
            <div className='profile'>
                <Link to='/profile'> <h1>Profile</h1> </Link>
                {/* <Link to='/profile'> <Button variant="outlined" color="primary">Main Profile</Button></Link> */}
               <div className='profile--menu-container'>
                <List component="nav" aria-label="main mailbox folders">
                        <ListItem button>
                            <Link to='/profile/modify'>
                                <ListItemIcon> <UndoIcon/>  </ListItemIcon>
                                <ListItemText primary="Update Group Name" />
                            </Link>
                        </ListItem>
                        <Divider />
                        <ListItem button>
                            <Link to='/profile/create'>
                                <ListItemIcon> <AddIcon /> </ListItemIcon>
                                <ListItemText primary="Create New Group" />
                            </Link>
                        </ListItem>
                    </List>
               </div>
                
                {/* <Link to='/profile/modify'> <Button variant="outlined" color="primary"> Update Group Name </Button></Link> */}
                {/* <Link to='/profile/create'> <Button variant="outlined" color="primary"> Create New Group</Button></Link> */}

                    <Switch>
                        <Route path='/profile/create'> <CreateGroup props={this.props.userId}/> </Route>
                        <Route path='/profile/modify'> <ModifyGroup groupName={this.state.groupName} modifyGroupName={this.modifyGroupName}/> </Route>
                        <Route exact path='/profile'> 
                            <h2 className='profile--greeting'>Hello {this.state.activeUser}</h2>
                            <p className='profile--group'>You are currently a member of <span>{this.state.groupName}</span> along with {this.state.groupMembersObjects.map((element) => ( <span key={element.id}>{element.firstName} {element.lastName} </span> ))} </p>  
                        </Route>
                    </Switch>
            </div>
        )
    }
}
export default Profile;