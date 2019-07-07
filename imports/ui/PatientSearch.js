import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import { Link } from 'react-router-dom';

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
                <th scope="row">{ patient.name } <br/> Apellidos <br/> { patient.id } </th>
                <td> Correo <br/> Teléfono </td>
                <td><Link className="btn btn-success btn-round" to={{
                    pathname: '/appointment',
                    state: {
                        patient
                    }
                }}>+ Iniciar Cita</Link></td>
            </tr>
        ))
    )

    componentDidMount() {
        this.props.call('patients.search', '', (error, result) => {
            if(!error){
                this.setState({filteredPatients: result});
            }else{
                this.setState({error: error.message});
            }
        });
    }

    render() {
        return (
            
            <div className="container">
            <h2 className = "title-patients">Pacientes</h2>
            <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12">
                  <form id="search" onSubmit={this.onSubmit} className="pb-5">
                    <div className="row">
                        <div className="col-lg-5 col-md-5 col-sm-12">
                        <input 
                            className ="form-control round-input search-input"
                            type="search"  
                            placeholder="Nombre o ID" 
                            onChange={(event) => this.setState({ searchQuery: event.target.value })}                        />
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-3 sm-top">
                            <button type="submit" className="btn btn-success btn-round ">Buscar</button>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 sm-top">
                            <Link className="btn btn-success btn-round " to="/registerPatients">Crear paciente</Link>
                        </div>
                    </div>
                    </form>
                    <table className="table table-borderless table-hover table-responsive">
                        <thead>
                            <tr>
                                <th scope="col">Paciente </th>
                                <th scope="col">Contacto</th>
                                <th scope="col">Próxima cita</th>
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