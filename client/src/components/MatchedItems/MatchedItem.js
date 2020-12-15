import { Link } from 'react-router-dom';
import React from 'react';
import Modal from './../Modal/Modal';
class MatchedItem extends React.Component {
   
    render() {
        const { img, synopsis, title, nfid } = this.props.props;
        return (
            <div className='matches--item'>
                <Link to={`/matches/${nfid}`}> 
                    <div className="matches--movie">
                        <img src={img} className="image-poster" alt=""/>
                        <div className="matches--div">
                            <h3 className="matches--title">{title}</h3> 

                            <p className="matches--synopsis">{synopsis}</p>
                        </div>
                    </div>
                </Link>
            <div className="trash--div">
            <Modal props={this.props.props} delete={this.props.delete} groupId={this.props.groupId}/>
            </div>
        </div>
        )
    }
}

export default MatchedItem;