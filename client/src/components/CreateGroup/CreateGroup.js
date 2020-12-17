import axios from 'axios';
import React from 'react';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

class CreateGroup extends React.Component {
    state = {
        groupMember: '',
        groupName: '',
        groupMemberID: 2,
        groupID: 0
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
                  // saving the user's ID to adjust the usergroups table
                    if(response.data.data.email === member){
                        this.setState({
                            groupMemberID: response.data.data.id
                        });
                        //if the invited user exists, then goes ahead and create a new group
                        axios({
                            method: 'post',
                            url: 'http://localhost:3000/groups',
                            data: {
                              groupName: name,
                            }
                          })
                          .then(response => 
                            // set a state variable with the groupID, in order to create a record in the usergroups table
                            this.setState({
                                groupID: response.data.data.id
                            }),
                            // go ahead an PUT both users in the usergroups table
                           
                            // I won't have time left to fully implement the PUT request. Hard coding some things below for my demo
                            

                            //                         
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
            <div className='create-group'>
                <h2 className='create-group--h2'>Create Group</h2>
                <form autoComplete='off'>
                    <p className='create-group--p'>Who would you like to create a group with?</p>
                    <TextField id="standard-basic" label="Your Friend's Email" value={this.state.groupMember} name='groupMember' onChange={this.handleInput}/>
                    {/* <input placeholder='Email' value={this.state.groupMember} name='groupMember' onChange={this.handleInput}></input> */}
                    <p className='create-group--p'>What is the new group's name?</p>
                    <TextField id="standard-basic" label="Group Name" value={this.state.groupName} name='groupName' onChange={this.handleInput}/>
                    {/* <input placeholder='Group Name' value={this.state.groupName} name='groupName' onChange={this.handleInput}></input> */}
                </form>
                 <Button variant="contained" color="primary" onClick={() => this.createGroup(this.state.groupName, this.state.groupMember)}><Link to='/profile'> Create Group </Link></Button> 
            </div>
        )
    }
}
export default CreateGroup;