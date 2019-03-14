import React from 'react';
import { NavLink } from 'react-router-dom';
import { withTracker } from 'meteor/react-meteor-data';

import { history } from '../routes/routes';

export class Login extends React.Component {
    state = {
        email: '',
        errorMessage: false,
        loading: false,
        password: ''
    }
    onSubmit = (event) => {
        event.preventDefault();
        let email = this.state.email.trim();
        let password = this.state.password;
        this.props.loginWithPassword({ email }, password, (err) => {
            if (err) {
                this.setState({ 
                    error: 'Unable to login. Check email or password.',
                    email: '',
                    password: ''
                });
            }else {
                this.setState({ error: ''});
                history.push('/home');
            }
        });
    }
    render() {
        return (
            <div className="signup-container">
                <div className="container absolute-center signup-content-container">
                    <div className="row justify-content-md-center">
                        <div className="col-sm-12 col-md-6 col-lg-6 align-self-center">
                            { this.state.error ? <p>{this.state.error}</p> : null }
                            <form onSubmit={this.onSubmit}>
                                <div id="salubet-logo-login" className="salubet-logo-box">
                                    <img src="/theme_images/logo_blanco.png" className="salubet-logo"></img>
                                </div>
                                <h3 className="text-center login-header">Bienvenido a la plataforma Salubet</h3>
                                <h3 className="text-center login-header">Expedientes</h3>
                                <div className="form-group">
                                    <label>Email address</label>
                                    <input 
                                        type="email" 
                                        className="form-control" 
                                        id="email" 
                                        aria-describedby="emailHelp" 
                                        placeholder="Enter email"
                                        value={this.state.email}
                                        onChange={(event) => this.setState({ email: event.target.value })}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Password</label>
                                    <input 
                                        type="password" 
                                        className="form-control" 
                                        id="password" 
                                        placeholder="Password" 
                                        value={this.state.password}
                                        onChange={(event) => this.setState({ password: event.target.value })}
                                        />
                                </div>
                                <NavLink to="/forgotPassword">Forgot your password?</NavLink>
                                <button type="submit" className="btn btn-outline-primary submit-button">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default withTracker(() => ({
    loginWithPassword: Meteor.loginWithPassword
}))(Login);

