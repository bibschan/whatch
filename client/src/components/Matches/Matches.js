import axios from 'axios';
import React from 'react';
import MatchedItem from '../MatchedItems/MatchedItem';
import { v4 as uuid } from 'uuid';
import Divider from '@material-ui/core/Divider';
const JSONData = require('../data.json');

class Matches extends React.Component{
    state = {
        matchesArray: [],
        getMovieDetails: JSONData,
        groupName: ''
    }

    getData(){
        axios
        .get('http://localhost:3000/groupchoices')
        .then( response =>              
            this.setState({
            matchesArray: response.data.data.filter(item => item.groupIdFK === this.props.groupId)
        }))
        .catch( error => console.log(error))
    }


    delete = (nfid, groupId) => {
        axios
        .delete(`http://localhost:3000/groupchoices/${groupId}/${nfid}`)
        .then( response => {
            if( response.status === 200) {
                this.setState({
                    matchesArray: this.state.matchesArray.filter(element => element.movieId !== nfid)
                })
            }})
        .catch(error => console.log(error))        
    }

    getGroupName(id){
        axios
        .get(`http://localhost:3000/groups/${id}`)
        .then( response => 
            this.setState({
               groupName:  response.data.data.groupName
            })
            )
        .catch( error => console.log(error))
    }

    getMovieDetails(id) {

        // const options = {
        //     method: 'GET',
        //     url: 'https://unogs-unogs-v1.p.rapidapi.com/aaapi.cgi',
        //     params: {t: 'loadvideo', q: `${id}`},
        //     headers: {
        //       'x-rapidapi-key': '6383079259msh7d18e69b4be3514p1b49b0jsn9180b504a13a',
        //       'x-rapidapi-host': 'unogs-unogs-v1.p.rapidapi.com'
        //     }
        //   };
          
        //   axios
        //   .request(options)
        //   .then(response => 
        //     //   console.log(response.data.RESULT.nfinfo) 
        //     this.setState({
        //         getMovieDetails: response.data.RESULT.nfinfo
        //     })
        //     )
        //   .catch(error =>
        //       console.error(error));
        // console.log(typeof id);
       
        let movie = this.state.getMovieDetails.filter(element => (element.nfid === id ));

        return movie[0]; 
    }

    componentDidMount(){
        this.getData();
        this.getGroupName(this.props.groupId)
    }

    render(){
        return(
            <div className='matches'>
                <h1>{this.props.groupId !== 0 ? `${this.state.groupName} matches`  : 'Group Matches'}</h1>
                {this.state.matchesArray.map( item => 
                    (   <div key={item.movieId} >
                            <MatchedItem props={this.getMovieDetails(item.movieId)} groupId={this.props.groupId} delete={this.delete} />
                            <Divider variant='middle' />
                        </div>
                    ))}
            </div>
        )
    }
}

export default Matches;