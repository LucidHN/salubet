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
            <div className="container absolute-center">
                <div className="row justify-content-md-center">
                    <div className="col-sm-12 col-md-6 col-lg-6 align-self-center">
                        <form>
                            <h2>Signup</h2>
                            <div className="form-group">
                                <label>Name</label>
                                <input type="text" className="form-control" id="name" aria-describedby="userName" placeholder="Enter full name" />
                            </div>
                            <div className="form-group">
                                <label>Medical Center</label>
                                <div className="form-check  mb-1  ">
                                    <input className="form-check-input" type="radio" name="medicalCenterType" id="hospital" value="hospital" />
                                    <label className="form-check-label" htmlFor="hospital">Hospital</label>
                                </div>
                                <div className="form-check mb-1">
                                    <input className="form-check-input" type="radio" name="medicalCenterType" id="clinic" value="clinic" />
                                    <label className="form-check-label" htmlFor="clinic">Clinic</label>
                                </div>
                                <div className="dropdown mt-2 mb-2">
                                    
                                    <button className="btn btn-primary dropdown-toggle btn-block" type="button" id="medicalCenter" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Available Medical Centers
                                    </button>
                                    <div className="dropdown-menu" aria-labelledby="medicalCenter">
                                        <a className="dropdown-item">Action</a>
                                        <a className="dropdown-item">Action2</a>
                                        <a className="dropdown-item">Action3</a>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <label>Secret Question</label>
                                <input type="text" className="form-control" id="secretQuestion" aria-describedby="secretQuestion" placeholder="Enter secret question" />
                            </div>
                            <div className="form-group">
                                <label>Secret Answer</label>
                                <input type="password" className="form-control" id="secretAnswer" aria-describedby="secretAnswer" placeholder="Enter secret answer" />
                            </div>
                            <div className="form-group">
                                <label>Confirm Secret Answer</label>
                                <input type="password" className="form-control" id="confirmSecretAnswer" aria-describedby="secretAnswerConfirmation" placeholder="Confirm secret answer" />
                            </div>

                            <div className="form-group">
                                <label>Email address</label>
                                <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" />
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" className="form-control" id="password" placeholder="Password" />
                            </div>
                            <div className="form-group">
                                <label>Confirm Password</label>
                                <input type="password" className="form-control" id="confirmPassword" placeholder="Confirm password" />
                            </div>
                            <button type="submit" className="btn btn-outline-primary btn-block mb-5">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}