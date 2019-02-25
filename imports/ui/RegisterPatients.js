import React from 'react';

export default class RegisterPatients extends React.Component {

    state = {
        nombrePaciente:'',
        fechaNacimiento:'',
        idPaciente:''
    }

    render() {
        return (
            <div className="register-patients-container">
                <form>
                    <div className="row">
                        <div className="col-sm-12 col-md-7 col-lg-7">
                            <div className = "form-group">
                                <label htmlFor="nombreCompleto">Nombre Completo</label>
                                <input className="form-control" id="nombreCompleto" placeholder="Nombre completo del paciente" />

                            </div>
                            
                        </div>
                        <div className="col-sm-12 col-md-7 col-lg-7">
                            <div className = "form-group">
                                <label htmlFor="fechaNacimiento">Fecha de Nacimiento</label>
                                <input className="form-control" id="fechaNacimiento" placeholder="Fecha de nacimiento del paciente" />

                            </div>
                            
                        </div>
                        <div className="col-sm-12 col-md-7 col-lg-7">
                            <div className = "form-group">
                                <label htmlFor="idPaciente">ID del paciente</label>
                                <input className="form-control" id="idPaciente" placeholder="ID del paciente" />

                            </div>
                            
                        </div>
                        <div className = "col-sm-12 col-md-7 col-lg-7">
                            <button type="submit" className="btn btn-outline-primary btn-block ">Submit</button>
                        </div>
                        
                    </div>
                </form>
            </div>
        );
    }
};