import React from 'react'

export default class Login extends React.Component {
    state = {
        email: '',
        errorMessage: false,
        loading: false,
        password: ''
    }
    render() {
        return (
            <p>Login</p>
        );
    }
}