import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';

export class MainSidebar extends React.Component {
    state = {
        sidebar: 'inactive'
    }
    componentDidMount() {
        $("#sidebar").mCustomScrollbar({
            theme: "minimal"
        });
    }
    render() {
        return (
                <nav id="sidebar">
                    <div className="sidebar-header sidebar-main-color">
                        <h3>Dr. { this.props.user ? this.props.user.profile.name : null }</h3>
                    </div>
                    <ul className="list-unstyled components bar">
                        <p className="bar hospital-subheader">San Felipe</p>
                        <li className="bar">
                            <a className="bar" href="#">Ficha de identificacion</a>
                        </li>
                        <li className="bar">
                            <a className="bar" href="#">Antecedentes</a>
                        </li>
                        
                        <li className="bar">
                            <a className="bar" href="#">Consulta</a>
                        </li>
                        <li className="bar">
                            <a className="bar" href="#">Examenes y laboratorios</a>
                        </li>
                        <li className="bar">
                            <a className="bar" href="#">Consultas Anteriores</a>
                        </li>
                        
                    </ul>
                </nav>
        );
    }
};

export default withTracker(() => ({
    user: Meteor.user()
}))(MainSidebar);