import React from 'react';
import axios from 'axios';
import Card from './Card';
// delete JSONData once ready to go live
const JSONData = require('./data.json');


let apiKey = "";

class CardList extends React.Component {
    state = {
      arrayResults: [],
      index: 50,
    }
    

getMovies(){
  //doing this to avoid using up my quota with RapidAPI. Delete once go-live
  this.setState({
    arrayResults: JSONData
    
  });

  // code below works perfectly!! 
  //  axios(`https://unogsng.p.rapidapi.com/search?rapidapi-key=${apiKey}`, 
  //     {"params":{
  //         "start_year":"2000",
  //         "orderby":"rating",
  //         "limit": '50',
  //         "audio":"english",
  //         "offset":`${this.state.index}`,
  //         "end_year":"2020"}
  //         }).then((response)=>{
  //           response.data.results.forEach(element => {
  //             this.setState({
  //               arrayResults: [...this.state.arrayResults, element]
  //             });
  //           });
  //           console.log(this.state.arrayResults);
  //         }).catch((error)=>{
  //           console.log(error);
  //         })
  }

  addMovieToArray = (id) => {
    // console.log(this.props);
    let object = {
      userIdFK: this.props.userId,
      groupIdFK: this.props.groupId,
      movieId: id
    }

    axios.post('http://localhost:3000/userchoices', object)
    .then(response => console.log(response))
    .catch(error => console.log(error))

    let newMoviesArray = [...this.state.arrayResults];
    newMoviesArray.shift();

    // console.log(this.state.arrayResults);
    this.setState({
      arrayResults: newMoviesArray
    })
  }

  removeItemFromArray = () => {
    let newMoviesArray = [...this.state.arrayResults];
    newMoviesArray.shift();

    this.setState({
      arrayResults: newMoviesArray
    })
  }

  componentDidMount() {
    this.getMovies();
  }

  render(){
    return (
      <div className="cardList">
         <div className="container">
          { this.state.arrayResults.length !== 0 && 
            <Card data={this.state.arrayResults} addMovieToArray={this.addMovieToArray} removeItemFromArray={this.removeItemFromArray} />
          // {this.state.arrayResults && 
            //  this.state.arrayResults.map((element) => (
            //     <Card data={element} addMovieToArray={this.props.addMovieToArray}/>
            //  ))
           }
           
         </div>
     </div>
   )
  }
   
}


export default CardList;