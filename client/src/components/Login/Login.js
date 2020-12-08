import React from 'react';
import Button from '../../elements/Buttons/Button';
import "./../../scss/App.css";
import axios from 'axios';

class Login extends React.Component {
    state = {
        email: localStorage.getItem('email') || '',
        password: localStorage.getItem('password') || ''
    }

    handleInput = (event) => {
        this.setState({
           [event.target.name]: event.target.value
        });
        localStorage.setItem(event.target.name, event.target.value);
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
            axios.post('http://localhost:3000/users/login', object)
            .then(
                response => 
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
                <form onSubmit={this.authenticateUser}>
                    <label htmlFor="email" className="login--label">Email</label>
                        <input onChange={this.handleInput} name='email' value={this.state.email} type="email" className="login--input"></input>
                    <label htmlFor="password" className="login--label">Password</label>
                        <input onChange={this.handleInput} name='password' value={this.state.password} type="password" className="login--input"></input>
                    <Button />
                </form>
            </div>
        );
    }  
}
export default Login;