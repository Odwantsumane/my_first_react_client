// import { useState } from 'react';
// import axios from 'axios';

function  Comp2(props) {

    return (
        <div>
            <h2 className="m-2 centerText">Employee Details</h2>
            <table className="table table-striped mt-5">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email Address</th>
                        <th>Country</th>
                        <th>Continent</th>
                        <th>Race</th>
                        <th>Todos</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.employeeData.map(
                            item => 
                            <tr key={ item.id }>
                                <td> { item.id }</td>
                                <td> { item.username }</td>
                                <td> { item.email }</td>
                                <td> { item.country }</td>
                                <td> { item.continent }</td>
                                <td> { item.race} </td>
                                <td><button type="button" className="btn btn-outline-info dropdown-toggle">Tasks</button></td>
                            </tr>
                              
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Comp2;