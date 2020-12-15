import { Link } from 'react-router-dom';
import React from 'react';
import axios from 'axios';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
const JSONData = require('../data.json');


class Show extends React.Component{
    state = {
        itemsArray: JSONData,
        showItem: {}
    }

    getShow(id){
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
        //        console.log(response) )
        //   .catch(error =>
        //       console.error(error))


        
        let show = this.state.itemsArray.filter(item => item.nfid == id).[0];
        
        this.setState({
            showItem: show
        })

    }

    componentDidMount(){
        this.getShow(this.props.match.params.id);
    }

    render(){
        return(
            <div className='show'>
                <div className='show--header'>
                    <Link to='/matches'>
                        <ArrowBackIcon fontSize='large'/>
                        {/* <img src='/assets/return-button.png' alt="" className='return-button'/> */}
                    </Link>
                    <h1 className='show--header__title'>{this.state.showItem.title}</h1>
                </div>
               
                <img className='show--poster' src={this.state.showItem.img} alt=""/>
                <p className='show--synopsis'> <b>Synopsis:</b> {this.state.showItem.synopsis}</p>
                
                <div className='show--div'>
                    <p className='show--imdb'> <b>IMDB Rating:</b> {this.state.showItem.imdbrating}</p>
                    <p className='show--year'> <b>Year:</b> {this.state.showItem.year}</p>
                </div>
               
            </div>
        )
    }  
}

export default Show;