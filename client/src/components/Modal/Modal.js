import React from 'react';
import Popup from 'reactjs-popup';

class Modal extends React.Component {
    render(){
    return (
        <Popup trigger={<img src='/assets/trash.png' alt="" className="trash-icon"/>} modal nested >    
        {close => (
            <div className="modal">
                <button className="close" onClick={close}>
                &times;
                </button>
                <div className="header"> Are you sure you want to remove {this.props.props.title} </div>
                <div className="content">
                <p>This action will delete {this.props.props.title} for everyone in the group</p>
                </div>
                <div className="actions">
                   <button className="button" onClick={() => {this.props.delete(this.props.props.nfid,this.props.groupId); close()}}> Delete </button>
                    <button className="button" onClick={() => { close(); }}> Cancel </button>
                </div>
            </div>
            )}
        </Popup>
        );
    }
  
}

export default Modal;