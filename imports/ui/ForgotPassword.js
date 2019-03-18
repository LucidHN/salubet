import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import { Link } from 'react-router-dom'

export class ForgotPassword extends React.Component {
    state = {
        email: '',
        error: ''
    }
    onSubmit = async (event) => {
        event.preventDefault();
        let email = this.state.email.trim();
        await this.props.call('user.findUserByEmail', email, async (error, { _id } = false) => {
            if (_id) {
                await this.props.call('user.sendResetPasswordEmail', _id);
            }
            this.setState({ error: 'Email not found.' });
        });
    }
    render() {
        return (
            <div className="container ">
                <div className="row justify-content-md-center align-items-center ">
                    <div className="col-sm-12 col-md-6 col-lg-6 align-self-center">
                        <form  onSubmit={this.onSubmit}>
                            {this.state.response ? <p>Respuesta</p> : <p>Sin respuesta</p>}
                            <div className="form-group">
                                <input className="form-control" placeholder="ejemplo@correo.com"
                                    onChange={(event) => this.setState({ email: event.target.value })}
                                />
                            </div>
                            <button className="btn btn-outline-info btn-block ">Enviar correo</button>
                            <Link className="text-center" to="/" >Iniciar Sesión</Link>
                        </form>
                    </div>
                </div>
                
            </div>
        );
    }
};

export default withTracker(() => ({
    call: Meteor.call
}))(ForgotPassword);
