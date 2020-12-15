import React from 'react';
import Popup from 'reactjs-popup';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { Divider } from '@material-ui/core';





class Modal extends React.Component {
    render(){
    return (
        
        <Popup trigger={<Button variant="outlined" size="small" color="secondary" startIcon={<DeleteIcon />} className='delete-button'>Delete</Button>} modal nested>    
        {close => (
            <div className="modal">
                <button className="close" onClick={close}>
                &times;
                </button>
                <div className="header"> Are you sure you want to remove {this.props.props.title} </div>
                <Divider /> 
                <div className="content">
                <p>This action will delete {this.props.props.title} for everyone in the group</p>
                </div>
                <div className="actions">
                    <Button startIcon={<DeleteIcon />} className="button" onClick={() => {this.props.delete(this.props.props.nfid,this.props.groupId); close()}}> Delete </Button>
                    <Button color="default" className="button" onClick={() => { close(); }}> Cancel </Button>
                </div>
            </div>
            )}
        </Popup>
        );
    }
  
}

export default Modal;