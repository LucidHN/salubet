import React from 'react';
import { Link } from 'react-router-dom';

export default class Dashboard extends React.Component {
    render() {
        return (
            <div>
                <p>Dashboard</p>
                <Link to='/registerPatients'></Link>
                <Link to='/home'></Link>
                { this.props.children }
            </div>
        );
    }
}