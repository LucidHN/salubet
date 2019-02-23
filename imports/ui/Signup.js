import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';

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
    handleMedicalCenterDropdown = (event, medicalCenter) => {
        event.preventDefault();
        this.setState({ medicalCenter });
    }
    render() {
        return (
            <div className="container absolute-center">
                <div className="row justify-content-md-center">
                    <div className="col-sm-12 col-md-6 col-lg-6 align-self-center">
                        <form onSubmit={this.onSubmit}>
                            <h2>Signup</h2>
                            <div className="form-group">
                                <label>Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="name" aria-describedby="userName"
                                    placeholder="Enter full name"
                                    onChange={(event) => this.setState({ name: event.target.value })}
                                />
                            </div>
                            <div className="form-group">
                                <label>Medical Center</label>
                                <div className="form-check  mb-1  ">
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
                                <div className="form-check mb-1">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="medicalCenterType"
                                        id="clinic"
                                        value="clinic"
                                        onChange={(event) => this.setState({ medicalCenterType: event.target.value })}
                                    />
                                    <label className="form-check-label" htmlFor="clinic">Clinic</label>
                                </div>
                                <select className="form-control mt-2 mb-2" id="medicalCenter">
                                    <option value="default" >Available Medical Centers</option>
                                    <option value="HMS" onClick={(event) => (this.handleMedicalCenterDropdown(event, 'HMS'))}>HMS</option>
                                    <option value="San Felipe" onClick={(event) => (this.handleMedicalCenterDropdown(event, 'San Felipe'))}>San Felipe</option>
                                    <option value="Medical Center" onClick={(event) => (this.handleMedicalCenterDropdown(event, 'Medical Center'))}>Medical Center</option>
                                </select>
                            </div>
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
                            <div className="form-group">
                                <label>Confirm Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="confirmPassword"
                                    placeholder="Confirm password"
                                    onChange={(event) => this.setState({ confirmPassword: event.target.value })}
                                />
                            </div>
                            <button type="submit" className="btn btn-outline-primary btn-block mb-5">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
};

export default withTracker(() => ({
    call: Meteor.call
}))(Signup);