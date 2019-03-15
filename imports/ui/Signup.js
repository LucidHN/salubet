import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import { Link } from 'react-router-dom';
import { history } from '../routes/routes';

export class Signup extends React.Component {
    state = {
        email: '',
        password: '',
        confirmPassword: '',
        name: '',
        medicalCenterType: '',
        medicalCenter: '',
        errorMessage: false,
        loading: false
    }
    onSubmit = async (event) => {
        event.preventDefault();
        if (this.state.password === this.state.confirmPassword) {
            const user = {
                email: this.state.email,
                password: this.state.password,
                profile: {
                    name: this.state.name,
                    medicalCenterType: this.state.medicalCenterType,
                    medicalCenter: this.state.medicalCenter
                }
            };
            await this.props.call('user.createUser', user, (error) => {
                if (error) {
                    this.setState({
                        loading: false,
                        errorMessage: error.message
                    });
                } else {
                    this.setState({ loading: false });
                    history.push('/');
                }
            });
        }
    }
    componentDidMount(){
            $('.status').fadeOut();
            $('.preloader').fadeOut();
    }
    handleMedicalCenterDropdown = (event, medicalCenter) => {
        event.preventDefault();
        this.setState({ medicalCenter });
    }
    render() {
        return (
            <div className="signup-container">
            <div className ="preloader"><div className="status"></div></div>
                <div className="container absolute-center signup-content-container">
                    <div className="row justify-content-md-center signup-form-container">
                        <div className="col-sm-12 col-md-6 col-lg-6 align-self-center signup-form-container">
                            <form onSubmit={this.onSubmit}>
                                <div className="salubet-logo-box mb-md-5 mb-lg-5">
                                    <img src="/theme_images/logo_blanco.png" className="salubet-logo"></img>
                                </div>
                                <div className="form-group">
                                    
                                    <input
                                        type="text"
                                        className="form-control bmd-label-floating input-login"
                                        id="name" aria-describedby="userName"
                                        placeholder="Nombre completo"
                                        onChange={(event) => this.setState({ name: event.target.value })}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Centro médico</label><br/>
                                    <div className="form-check mb-1 form-check-inline">
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            name="medicalCenterType"
                                            id="hospital"
                                            value="hospital"
                                            onChange={(event) => this.setState({ medicalCenterType: event.target.value })}
                                        />
                                        <label className="form-check-label" htmlFor="hospital">Hospital</label>
                                    </div>
                                    <div className="form-check mb-1 form-check-inline">
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            name="medicalCenterType"
                                            id="clinic"
                                            value="clinic"
                                            onChange={(event) => this.setState({ medicalCenterType: event.target.value })}
                                        />
                                        <label className="form-check-label" htmlFor="clinic">Clínica</label>
                                    </div>
                                    <select className="form-control mt-2 mb-2 select-signup" id="medicalCenter">
                                        <option className = "option-signup" value="default" >Centros médicos disponibles</option>
                                        <option className = "option-signup" value="HMS" onClick={(event) => (this.handleMedicalCenterDropdown(event, 'HMS'))}>HMS</option>
                                        <option className = "option-signup" value="San Felipe" onClick={(event) => (this.handleMedicalCenterDropdown(event, 'San Felipe'))}>San Felipe</option>
                                        <option className = "option-signup" value="Medical Center" onClick={(event) => (this.handleMedicalCenterDropdown(event, 'Medical Center'))}>Medical Center</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                
                                    <input
                                        type="email"
                                        className="form-control bmd-label-floating input-login"
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
                                <div className="form-group">
                                    
                                    <input
                                        type="password"
                                        className="form-control input-login"
                                        id="confirmPassword"
                                        placeholder="Confirmar contraseña"
                                        onChange={(event) => this.setState({ confirmPassword: event.target.value })}
                                    />
                                </div>
                                
                                <button type="submit" className="btn btn-outline-primary submit-button btn-outline-secondary">Registrarse</button>
                                <Link id="linkSignup" className="text-center" to="/">Iniciar sesión</Link>
                                
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default withTracker(() => ({
    call: Meteor.call
}))(Signup);