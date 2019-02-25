import React from 'react';

export default class PatientList extends React.Component {

    renderRows = () => {
        return (
            <tr>
                <th scope="row">Jonathan Andre Mendoza Ferrera</th>
                <td>0801-1950-05785</td>
                <td><button className="btn btn-success btn-round">VER EXPEDIENTE</button></td>
            </tr>
        );
    }

    render() {
        return (
            <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12">
                    <table className="table table-hover">
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