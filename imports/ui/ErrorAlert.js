import React from 'react';

export default ErrorAlert = (props) => (
    <div className="alert alert-danger" role="alert">
        <h4 className="alert-heading">Ooops!</h4>
        <p>{props.message}</p>
    </div>
);