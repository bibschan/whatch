import { Link } from "react-router-dom";
import React from 'react';
import Button from '@material-ui/core/Button';


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
                <h2 className='modify-group--h2'>Here, you can update your group's name</h2>
                <p className='modify-group--p'> Your group's current name is <b>{groupName}</b>, you can modify by submitting a new name below</p>
                <form className='modify-group--form'>
                    <label className='modify-group--form__label'>New Group Name</label>
                    <input type='textbox' className='modify-group--form__input' onChange={this.handleInputChange} value={this.state.newGroupName}></input>
                </form>
                <Link to='/profile'> <Button variant="contained" color="primary" onClick={() => modifyGroupName(this.state.newGroupName)} className='modify-group--button'>Change Group Name</Button> </Link>
            </div>
        )
    }
    
}

export default ModifyGroup;
