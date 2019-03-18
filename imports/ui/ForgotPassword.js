import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';

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
            <div>
                { this.state.response ? <p>Respuesta</p> : <p>Sin respuesta</p>}
                <form onSubmit={this.onSubmit}>
                    <input
                        onChange={(event) => this.setState({ email: event.target.value })}
                    />
                    <button>Enviar correo</button>
                </form>
            </div>
        );
    }
};

export default withTracker(() => ({
    call: Meteor.call
}))(ForgotPassword);
