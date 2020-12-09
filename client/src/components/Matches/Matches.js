import axios from 'axios';
import React from 'react';
import MatchedItem from '../MatchedItems/MatchedItem';
const JSONData = require('../data.json');

class Matches extends React.Component{
    state = {
        matchesArray: [],
        getMovieDetails: JSONData,
        groupName: 0
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
        let movie = this.state.getMovieDetails.filter(element => element.nfid == id);
        
        return movie[0]; 
    }

    componentDidMount(){
        this.getData();
        this.getGroupName(this.props.groupId)
    }

    render(){
        return(
            <div>
                <h2>{this.props.groupId !== 0 ? `Group ${this.state.groupName} matches`  : 'Group Matches'}</h2>
                {this.state.matchesArray.map( item => 
                    (   <div>
                            <MatchedItem props={this.getMovieDetails(item.movieId)}/>
                            {/* <MatchedItem props={this.state.getMovieDetails.filter(element => element.netflixid == item.movieId )}/> */}
                        </div>
                    ))}
            </div>
        )
    }
}

export default Matches;