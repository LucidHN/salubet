import React from 'react';

import Home from './Home';
import RegisterPatients from './RegisterPatients';

import MainSidebar from './MainSidebar';
import PatientSidebar from './PatientSidebar';


export default class Dashboard extends React.Component {
    state = {

        patientSidebar: false,
        mainSidebar: true,
        activebar:false
    }


    renderSidebar(){
        if(this.state.mainSidebar){
            return(
                <MainSidebar/>
            );
        }else if(this.state.patientSidebar){
            return(
                <PatientSidebar/>
            );
        }else{
            return(
                <div>ERROR</div>
            );
        }
        
    }
    changeToPatientSidebar(){
        if(!this.state.activebar){
            this.setState({
                patientSidebar:true,
                mainSidebar:false
            });
        }
    }
    changeToMainSidebar(){
        if(!this.state.activebar){
            this.setState({
                patientSidebar:false,
                mainSidebar:true
            });
        }
        
    }
    handleToggle() {
        this.setState({ sidebar: 'active', activebar:!this.state.activebar }, () => {
            $('#sidebar').toggleClass('active');
            $('#content').toggleClass('active');
            $('.collapse.in').toggleClass('in');
            $('a[aria-expanded=true]').attr('aria-expanded', 'false');
        });

    }


    render() {

        return (

            <div className="wrapper">
                {this.renderSidebar()}
                <div id="content">
                    <nav className="navbar navbar-expand-lg navbar-light  nav-white-background">
                        <div className="container-fluid">
                            <button onClick={this.handleToggle.bind(this)} type="button" id="sidebarCollapse" className="btn btn-info">
                                <span>Toggle Sidebar</span>
                            </button>
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link" href="#" onClick={this.changeToPatientSidebar.bind(this)}>Pacientes</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#" onClick={this.changeToMainSidebar.bind(this)}>Expedientes</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <div className="container">
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}