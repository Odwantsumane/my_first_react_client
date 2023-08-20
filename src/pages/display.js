import Table from "../components/Display.component";
import { useState } from 'react';
import axios from "axios";

const USERS_REST_API_URL = 'http://127.0.0.1:4000/employee/all';

function Display() {
    const [employeeDetails, setEmployeeDetails] = useState([])

    const handleDatabase = () => {
        axios.get(USERS_REST_API_URL)
        .then(
            function(response) {
                // alert("sucessfully fetched data")
                setEmployeeDetails(response.data);
                 
            }).catch(function(error)
            {
                alert(error)
            });
    }
    handleDatabase();
    
    return (
        <div className="container mt-3">
            <Table employeeData = {employeeDetails}/>
        </div>
    )
}
export default Display;