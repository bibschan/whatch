import React from 'react';
// import "./../../scss/App.css";
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import AccountCircle from '@material-ui/icons/AccountCircle';
import LockIcon from '@material-ui/icons/Lock';
import InputAdornment from '@material-ui/core/InputAdornment';

class Login extends React.Component {
    state = {
        email:  '',
        password: ''
    }

    handleInput = (event) => {
        this.setState({
           [event.target.name]: event.target.value
        });
        // localStorage.setItem(event.target.name, event.target.value);
    } 
    authenticateUser = (event) => {
        event.preventDefault();

        if(this.state.email === '' || this.state.password === '') {
            alert('Fields cannot be empty');
        } else {
            let object = {
                email: this.state.email,
                password: this.state.password 
            }
            axios.post('http://localhost:3000/login', object)
            .then( response => 
                this.props.authenticateUser(response.data.data)
            )
            .catch( 
                error => console.log(error)
            ); 
        }
    }

    render() {
        return (
            <div className="login">
                <form onSubmit={this.authenticateUser} autoComplete='off'>
                    <TextField  label="Email" name='email' onChange={this.handleInput} value={this.state.email} type="email" InputProps={{startAdornment: (<InputAdornment position="start"><AccountCircle /> </InputAdornment>)}}/>
                    <TextField  label="Password" name='password' onChange={this.handleInput} value={this.state.password} type="password"  InputProps={{startAdornment: (<InputAdornment position="start"> <LockIcon /> </InputAdornment>)}}/>
                    <Button variant="contained" color="primary" type='submit'>Login</Button>
                </form>
            </div>
        );
    }  
}
export default Login;