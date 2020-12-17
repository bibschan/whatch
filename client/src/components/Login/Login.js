import React from 'react';
import Button from '../../elements/Buttons/Button';
// import "./../../scss/App.css";
import axios from 'axios';
import TextField from '@material-ui/core/TextField';


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
                    {/* <label htmlFor="email" className="login--label">Email</label> */}
                        <TextField id="standard-basic" label="Email" name='email' onChange={this.handleInput} value={this.state.email} type="email"/>
                        {/* <input   className="login--input"></input> */}
                    {/* <label htmlFor="password" className="login--label">Password</label> */}
                        <TextField id="standard-basic" label="Password" name='password' onChange={this.handleInput} value={this.state.password} type="password"/>
                        {/* <input onChange={this.handleInput}  value={this.state.password} className="login--input"></input> */}
                    <Button />
                </form>
            </div>
        );
    }  
}
export default Login;