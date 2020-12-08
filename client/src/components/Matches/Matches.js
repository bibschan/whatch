import axios from 'axios';
import React from 'react';
import MatchedItem from '../MatchedItems/MatchedItem';

class Matches extends React.Component{
    state = {
        matchesArray: [],
        getMovieDetails: [
            {
                avgrating: "0",
                download: "0",
                image1: "https://occ-0-784-778.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABRi2R3cCB21dlNI6MyR1w2oye1wb0KPl4XJfHNiLwlAm-umqe3zz7f7x7xtLLEPrGEyD5dZfbHuciPWQgFP7V0ld3hRu.jpg?r=6fd",
                image2: "https://occ-0-784-778.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABRi2R3cCB21dlNI6MyR1w2oye1wb0KPl4XJfHNiLwlAm-umqe3zz7f7x7xtLLEPrGEyD5dZfbHuciPWQgFP7V0ld3hRu.jpg?r=6fd",
                matlabel: "All Ages",
                matlevel: "",
                netflixid: "80153235",
                released: "2014",
                runtime: "1h32m",
                synopsis: "Twenty years after high school, a man invites his less successful pals to his resort wedding, where some old high jinks could help them all grow up.",
                title: "A Fairy Tale Wedding",
                type: "movie",
                unogsdate: "2017-08-11 03:26:36",
                updated: ""
            },
            {
                avgrating: "0",
                download: "0",
                image1: "https://art-s.nflximg.net/e32f8/eae7c495496fe408457650488c07147fd94e32f8.jpg",
                image2: "https://art-s.nflximg.net/e32f8/eae7c495496fe408457650488c07147fd94e32f8.jpg",
                matlabel: "General Audiences",
                matlevel: "",
                netflixid: "70307407",
                released: "2014",
                runtime: "1h24m",
                synopsis: "While a documentary team searches remote parts of the Indonesian jungle looking for an endangered leopard, they soon realize they&#39;re being stalked.",
                title: "The Jungle",
                type: "movie",
                unogsdate: "2017-08-11 13:19:42",
                updated: ""
            },
            {
                avgrating: "0",
                download: "0",
                image1: "https://art-s.nflximg.net/e32f8/eae7c495496fe408457650488c07147fd94e32f8.jpg",
                image2: "https://art-s.nflximg.net/e32f8/eae7c495496fe408457650488c07147fd94e32f8.jpg",
                matlabel: "General Audiences",
                matlevel: "",
                netflixid: "80142521",
                released: "2014",
                runtime: "1h24m",
                synopsis: "While a documentary team searches remote parts of the Indonesian jungle looking for an endangered leopard, they soon realize they&#39;re being stalked.",
                title: "The Meme",
                type: "movie",
                unogsdate: "2017-08-11 13:19:42",
                updated: ""
            },
            {
                avgrating: "0",
                download: "0",
                image1: "https://art-s.nflximg.net/e32f8/eae7c495496fe408457650488c07147fd94e32f8.jpg",
                image2: "https://art-s.nflximg.net/e32f8/eae7c495496fe408457650488c07147fd94e32f8.jpg",
                matlabel: "General Audiences",
                matlevel: "",
                netflixid: "423744",
                released: "2014",
                runtime: "1h24m",
                synopsis: "While a documentary team searches remote parts of the Indonesian jungle looking for an endangered leopard, they soon realize they&#39;re being stalked.",
                title: "The Second Meme",
                type: "movie",
                unogsdate: "2017-08-11 13:19:42",
                updated: ""
            },
            {
                avgrating: "0",
                download: "0",
                image1: "https://art-s.nflximg.net/e32f8/eae7c495496fe408457650488c07147fd94e32f8.jpg",
                image2: "https://art-s.nflximg.net/e32f8/eae7c495496fe408457650488c07147fd94e32f8.jpg",
                matlabel: "General Audiences",
                matlevel: "",
                netflixid: "70307747",
                released: "2014",
                runtime: "1h24m",
                synopsis: "While a documentary team searches remote parts of the Indonesian jungle looking for an endangered leopard, they soon realize they&#39;re being stalked.",
                title: "The Third Meme",
                type: "movie",
                unogsdate: "2017-08-11 13:19:42",
                updated: ""
            }
        ]
    }

    getData(){
        axios
        .get('http://localhost:3000/groupchoices')
        .then( response => this.setState({
            matchesArray: response.data.data
        }))
        .catch( error => console.log(error))
    }

    getGroupName(id){
        console.log(id);
        axios
        .get(`http://localhost:3000/groups/${id}`)
        .then( response => { return response.data})
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
        // this part doesn't works as expected, when I return the info it doesn't print to screen
        //        console.log(response.data.RESULT.nfinfo) )
        //   .catch(error =>
        //       console.error(error));

        let movie = this.state.getMovieDetails.filter(element => element.netflixid == id );
        return movie[0]; 
    }

    componentDidMount(){
        this.getData();
    }

    render(){
        
        return(
            <div>
                <h2>{this.props.groupId !== 0 ? `Group ${this.getGroupName(this.props.groupId)} matches`  : 'Group Matches'}</h2>
                {this.state.matchesArray.map( item => 
                    (   <div>
                            {/* { movie = this.getMovieDetails(item.movieId)} */}
                            {/* the bel ow code works, but I don't want to make several requests for each property */}
                            {/* <img src={this.getMovieDetails(item.movieId).image1} className="image-poster"/>
                            <div className="matches--div">
                                <p key={item.id} className="matches--title">{this.getMovieDetails(item.movieId).title}</p> 
                                <p key={item.id} className="matches--synopsis">{this.getMovieDetails(item.movieId).synopsis}</p>
                            </div> */}
                            <MatchedItem props={this.getMovieDetails(item.movieId)}/>
                        </div>
                    ))}
            </div>
        )
    }
}

export default Matches;