import { Link } from "react-router-dom";
import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

class ModifyGroup extends React.Component {
    state = {
        newGroupName: ''
    }

    handleInputChange = (event) => {
        this.setState(
            {newGroupName: event.target.value
        });
    }

    render(){
        const { groupName, modifyGroupName} = this.props;
        return(
            <div className='modify-group'>
                <h2 className='modify-group--h2'>Would you like to update your group name?</h2>
                <p className='modify-group--p'> Your group's current name is <b>{groupName}</b> and you can modify it below</p>
                <form className='modify-group--form' autoComplete="off">
                    {/* <label className='modify-group--form__label'>New Group Name:</label> */}
                    <TextField id="standard-basic" label="New Group Name" onChange={this.handleInputChange} value={this.state.newGroupName} />
                    {/* <input type='textbox' className='modify-group--form__input' onChange={this.handleInputChange} value={this.state.newGroupName}></input> */}
                </form>
                <Link to='/profile' className='modify-group--button'> <Button variant="contained" color="primary" onClick={() => modifyGroupName(this.state.newGroupName)} >Change Group Name</Button> </Link>
            </div>
        )
    }
    
}

export default ModifyGroup;
