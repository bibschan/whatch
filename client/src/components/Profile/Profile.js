import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class Profile extends React.Component {
    state = {
        groupName: '',
        groupMembers: [],
        groupMembersObjects: []
    }
    
    modifyGroupName(){

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

    updatePassword(){

    }

    componentDidMount(){
        this.getGroupInfo();
        this.getGroupMembers();
        setTimeout(() =>this.getGroupMembersNames(), 500);
    }

    render() {
        return(
            <div>
                <h1>Profile</h1>

                <p>You're a member of <b>{this.state.groupName}</b> along with {this.state.groupMembersObjects.map((element) => ( <span key={element.id}>{element.firstName} {element.lastName} </span> ))} </p> 
                
                <Link to='/profile/modify'>Modify group name</Link>

                <p>User section</p>
                <p>Update password</p>
            </div>
        )
    }
}
export default Profile;