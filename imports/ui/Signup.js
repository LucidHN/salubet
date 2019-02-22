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
            <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Dropdown button
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a className="dropdown-item" href="#">Action</a>
                    <a className="dropdown-item" href="#">Another action</a>
                    <a className="dropdown-item" href="#">Something else here</a>
                </div>
            </div>
        );
    }
}