import React from 'react';
import { NavLink } from 'react-router-dom';
import { withTracker } from 'meteor/react-meteor-data';
import { Link } from 'react-router-dom';
import { history } from '../routes/routes';

import Preloader from './Preloader'

export class Login extends React.Component {
    state = {
        email: '',
        errorMessage: false,
        loading: false,
        password: '',
        loaded:false
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
                <Preloader/>
                <div className="container absolute-center signup-content-container">
                    <div className="row justify-content-md-center">
                        <div className="col-sm-12 col-md-6 col-lg-6 align-self-center">
                            { this.state.error ? <p>{this.state.error}</p> : null }
                            <form onSubmit={this.onSubmit}>
                                
                                <img src="/theme_images/logo_blanco1.png" className="salubet-logo text-center"></img>
                                
                                <h3 className="text-center login-header">Bienvenido a la plataforma Salubet</h3>
                                <h3 className="text-center login-header">Expedientes</h3>
                                <div className="form-group">
                                    
                                    <input 
                                        type="email" 
                                        className="form-control input-login" 
                                        id="email" 
                                        aria-describedby="emailHelp" 
                                        placeholder="Correo electrónico"
                                        onChange={(event) => this.setState({ email: event.target.value })}
                                    />
                                </div>
                                <div className="form-group">
                                    <input 
                                        type="password" 
                                        className="form-control input-login" 
                                        id="password" 
                                        placeholder="Contraseña" 
                                        onChange={(event) => this.setState({ password: event.target.value })}
                                        />
                                </div>
                                <button type="submit" className="btn btn-outline-primary submit-button">Continuar</button>
                                <Link id="linkSignup" className="text-center links-login" to="/signup">Registrarse</Link>
                                <Link className="text-center links-login" to="/forgotPassword">Olvidé mi contraseña</Link>
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

