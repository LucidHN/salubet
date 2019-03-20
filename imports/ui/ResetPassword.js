import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Accounts } from 'meteor/accounts-base'

export class ResetPassword extends React.Component {
    state = {
        password: '',
        confirmPassword: '',
    }
    onSubmit = async (e) => {
        e.preventDefault();
        const { token } = this.props.match.params;
        if (this.state.password === this.state.confirmPassword) {
            await this.props.resetPassword(token, this.state.password);
        }
    }
    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <input 
                        type="password" 
                        id="password" 
                        placeholder="Contraseña" 
                        onChange={(event) => this.setState({ password: event.target.value })}
                        type="password"
                    />
                    <input 
                        type="password" 
                        id="confirmPassword" 
                        placeholder="Confirmar contraseña" 
                        onChange={(event) => this.setState({ confirmPassword: event.target.value })}
                        type="password" 
                    />
                    <button>Change password</button>
                </form>
            </div>
        );
    }
};

export default withTracker(() => ({
    resetPassword: Accounts.resetPassword
})) (ResetPassword);