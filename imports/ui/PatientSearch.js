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
            <tr key={patient._id}>
                <th scope="row">{ patient.name }</th>
                <td>{ patient.id }</td>
                <td><button className="btn btn-success btn-round">VER EXPEDIENTE</button></td>
            </tr>
        ))
    )
    render() {
        return (
            <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12">
                <form id="search" onSubmit={this.onSubmit}>
                    <div className="row">
                        <div className="col-lg-7 col-md-7 col-sm-7">
                        <input 
                            type="text" 
                            id="search-input" 
                            placeholder="Buscar Cliente..." 
                            onChange={(event) => this.setState({ searchQuery: event.target.value })}
                        />
                        </div>
                        <div className="col-lg-1 col-md-1 col-sm-1">
                            <button type="submit" id="search-btn" className="btn">Buscar</button>
                        </div>
                    </div>
                    </form>
                    <table className="table table-hover table-responsive">
                        <thead>
                            <tr>
                                <th scope="col">Nombre </th>
                                <th scope="col">Num. Identificacíon</th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderRows()}
                        </tbody>
                    </table>
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