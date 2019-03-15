import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Link } from 'react-router-dom';
import { history } from '../routes/routes';

export class Login extends React.Component {
    state = {
        email: '',
        errorMessage: false,
        loading: false,
        password: '',
        loaded:false
    }
    componentDidMount(){
        $('.status').fadeOut();
        $('.preloader').fadeOut();
    }

    onSubmit = (event) => {
        event.preventDefault();
        let email = this.state.email.trim();
        let password = this.state.password;
        this.props.loginWithPassword({ email }, password, (err) => {
            if (err) {
                this.setState({error: 'Unable to login. Check email and password.'});
            }else {
                this.setState({error: ''});
                history.push('/home');
            }
        });
    }
    render() {
        return (
            <div className="signup-container">
                <div className ="preloader"><div className="status"></div></div>
                <div className="container absolute-center signup-content-container">
                    <div className="row justify-content-md-center">
                        <div className="col-sm-12 col-md-6 col-lg-6 align-self-center">
                            <form onSubmit={this.onSubmit}>
                                <div id="salubet-logo-login" className="salubet-logo-box">
                                    <img src="/theme_images/logo_blanco.png" className="salubet-logo"></img>
                                </div>
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
                                <Link id="linkSignup" className="text-center" to="/signup">Registrarse</Link>
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

