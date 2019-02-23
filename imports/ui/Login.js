import React from 'react';
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
                this.setState({error: 'Unable to login. Check email and password.'});
            }else {
                this.setState({error: ''});
                history.push('/home');
            }
        });
    }
    render() {
        return (
            <div className="container absolute-center">
                <div className="row justify-content-md-center">
                    <div className="col-sm-12 col-md-6 col-lg-6 align-self-center">
                        <form onSubmit={this.onSubmit}>
                            <h2>Login</h2>
                            <div className="form-group">
                                <label>Email address</label>
                                <input 
                                    type="email" 
                                    className="form-control" 
                                    id="email" 
                                    aria-describedby="emailHelp" 
                                    placeholder="Enter email"
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
                                    onChange={(event) => this.setState({ password: event.target.value })}
                                    />
                            </div>
                            <button type="submit" className="btn btn-outline-primary btn-block">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
};

export default withTracker(() => ({
    loginWithPassword: Meteor.loginWithPassword
}))(Login);

