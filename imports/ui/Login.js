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
            <div className="container absolute-center">
                <div className="row justify-content-md-center">
                    <div className="col-sm-12 col-md-5 col-lg-6 align-self-center">
                        <form>
                            <h2>Login</h2>
                            <div className="form-group">
                                <label>Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                            </div>
                            <button type="submit" className="btn btn-outline-primary btn-block">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}