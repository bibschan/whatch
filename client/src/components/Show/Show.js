import { Link } from 'react-router-dom';
import React from 'react';
import axios from 'axios';

class Show extends React.Component{

    state = {
        show: []
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
    }

    componentDidMount(){
        this.getShow(this.props.match.params.id);
    }

    render(){
        return(
            <div>
                <Link to='/matches'><img src='/assets/return-button.png' className='return-button'/></Link>
                <h3></h3>
                <p>  </p>
                <p>hello show</p>
            </div>
        )
    }  
}

export default Show;