import React from 'react';

export default class Signup extends React.Component {
    state = {
        email: '',
        password: '',
        name: '',
        medicalCenter: '',
        secretQuestion: '',
        secretAnswer: '',
        errorMessage: false,
        loading: false
        
    }

    render() {
        return (
            <p>Sign up</p>
        );
    }
}