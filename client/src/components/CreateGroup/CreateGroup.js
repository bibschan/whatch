import axios from 'axios';
import React from 'react';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';


class CreateGroup extends React.Component {
    state = {
        groupMember: '',
        groupName: ''
    }

    handleInput = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    createGroup(name, member) {
        if(name !== '' && member !== '') {
            //if name and member variables are not empty, tries to find the user in the DB
            axios({
                method: 'post',
                url: `http://localhost:3000/users/${member}`
              })
              .then(response => {
                    if(response.data.data.email === member){
                        //if the invited user exists, then goes ahead and create a new group
                        axios({
                            method: 'post',
                            url: 'http://localhost:3000/groups',
                            data: {
                              groupName: name,
                            }
                          })
                          .then(response => 
                             alert("Group created successfully"), 
                             
                            )
                          .catch(error => console.log(error))
                    } else {
                        // return a message saying it couldn't find the user
                       alert("That email could not be found in our database, your friend needs to sign up first");
                    }
                })
              .catch(error => console.log(error))
        }  
    }

    render() {
        return(
            <div>
                <p>Create Group</p>
                <label>Who would you like to create a group with? Use your friend's email</label>
                <input placeholder='Email' value={this.state.groupMember} name='groupMember' onChange={this.handleInput}></input>
                <label>What's the group's name?</label>
                <input placeholder='Group Name' value={this.state.groupName} name='groupName' onChange={this.handleInput}></input>

                
                <Button variant="contained" color="primary" onClick={() => this.createGroup(this.state.groupName, this.state.groupMember)}>
                   <p>Create Group!</p>
                </Button>
            </div>
        )
    }
}
export default CreateGroup;