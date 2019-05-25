import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';

import { Patients } from '../api/patients';

export class PatientSearch extends React.Component {
    state = {
        searchQuery: '',
        error: '',
        loading: false,
        filteredPatients: []
    }
    onSubmit = (event) => {
        event.preventDefault();
        let searchQuery = this.state.searchQuery.trim();
        this.props.call('patients.search', searchQuery, (error, result) => {
            if(!error){
                this.setState({filteredPatients: result});
            }else{
                this.setState({error: error.message});
            }
        });
        
    }
    renderRows = () => (
        this.state.filteredPatients.map((patient) => (
            <tr key={patient._id} >
                <th scope="row">{ patient.name }</th>
                <td>{ patient.id }</td>
                <td><button className="btn btn-success btn-round">Iniciar cita</button></td>
            </tr>
        ))
    )
    render() {
        return (
            <div className="container">
                <h2 className = "title-patients">Pacientes</h2>
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <form id="search" onSubmit={this.onSubmit} className="pb-5">
                            <div className="row">
                                <div className="col-lg-5 col-md-5 col-sm-7">
                                <input 
                                    className ="form-control"
                                    type="text" 
                                    id="search-input" 
                                    placeholder="Nombre o ID" 
                                    onChange={(event) => this.setState({ searchQuery: event.target.value })}
                                />
                                </div>
                                <div className="col-lg-1 col-md-1 col-sm-6 search-btn">
                                    {/* <button type="submit" id="search-btn " className="btn-round">Buscar</button> */}
                                    <button type="submit" id = "search-btn"className="btn btn-success btn-round">Buscar</button>
                                </div>
                            </div>
                        </form>
                        <table className="table table-borderless table-hover table-responsive">
                            <thead>
                                <tr>
                                    <th scope="col">Paciente </th>
                                    <th scope="col"># Identificacíon</th>
                                    <th scope="col"></th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.renderRows()}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
};

export default withTracker(() => {
    Meteor.subscribe('patients');
    
    return {
        patients: Patients.find({}).fetch(),
        call: Meteor.call
    };
})(PatientSearch);