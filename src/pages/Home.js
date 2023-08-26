import axios from "axios";
import { useState } from "react";
import HomeComp from "../components/HomeComponent"

const USERS_REST_API_URL = 'http://127.0.0.1:4000/employee/all';

function Home() { 
    const [employeeDetails, setEmployeeDetails] = useState([])

    const handleDatabase = () => {
        axios.get(USERS_REST_API_URL)
        .then(
            function(response) {
                // alert("sucessfully fetched data")
                setEmployeeDetails(response.data);
                 
            }).catch(function(error)
            {
                alert(error);
            });
    }
    handleDatabase();
    
    return (
        <HomeComp empData={employeeDetails}/>
    )
}
export default Home;