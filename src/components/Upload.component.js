import {useState} from "react";
import './styling/comp1.css';
import axios from 'axios';

const USERS_REST_API_URL = 'http://127.0.0.1:4000/employee/add';

// dummy data
const employeeIds = {
    "1234": "Odwa","1357": "Philani","1471": "Aphelele","1593": "Nolizwi"
}

const employeeInfo = [
    {"id": "1234", "username": "Odwa Ntsumane", "email": "odwa@gmail.com", "country": "South Africa", "continent": "Africa", "race": "Brown", "empTodos": []},
    {"id": "1357", "username": "Philani Bangani", "email": "philani@gmail.com", "country": "South Africa", "continent": "Africa", "race": "Yellow", "empTodos": []},
    {"id": "1471", "username": "Aphelele Mahlekelele", "email": "aphelele@gmail.com", "country": "South Africa", "continent": "Africa", "race": "Orange", "empTodos": []},
    {"id": "1593", "username": "Nolizwi Mjokane", "email": "nolizwi@gmail.com", "country": "South Africa", "continent": "Africa", "race": "Pink", "empTodos": []}
]

var count = 1;

function Component() {
    const [inputs, setInputs] = useState({});
    const [updateStatus, setUpdateStatus] = useState(false);
    const [unSuccessful, setFailedStatus] = useState(false);
    const [todos, setTodos] = useState([]);
    const [idEntered, setIdEntered] = useState(true);
    var employeeDetails;

    const handleTodos = () => {
        // will have to change this to delete a specific todo
        setTodos(todos.slice(1,todos.length))
    }

    const handleChange = (event) => {

        const name = event.target.name;
        const value = event.target.value;
        var lastChar = value.substring(value.length - 1, value.length);
        var store = value;
         
         
        if(name === "todos") {
            if (inputs.identifier) {
                setIdEntered(true);
                if (lastChar === ";") {
                    const newTodo = {"id": inputs.identifier + `${count++}`, "title": store.replace(lastChar, ""), "done": false};

                    setTodos(todos.concat([newTodo]));
                    setInputs(values => ({...values, [name]: ""}))
                } else {
                    setInputs(values => ({...values, [name]: value}));
                }
            }else {
                setIdEntered(false);
            }
        } else {
           setInputs(values => ({...values, [name]: value}));
        }  
    }

    const handleSubmit = (e) => {
        e.preventDefault()
         
        if (employeeIds[inputs.identifier]) {
            
            axios.post(USERS_REST_API_URL,UpdateTodo(inputs.identifier))
                .then(
                function(response) {
                    setUpdateStatus(true);
                }).catch(function(error)
                {
                    alert("Server error: check console for more info")
                    console.log(error);
                });
        }else {
            setFailedStatus(true);
        }
    }

    function findEmployee(id) {
        var result = {};
        
        employeeInfo.forEach(item => {
            if(item.id === id) {
                result = item;
            }
        })

        employeeDetails = result;
        return  result;
    }

    function UpdateTodo(id) {

        findEmployee(id);
        pushTodos();

        // console.log(employeeDetails);
        return  employeeDetails;
    }

    function pushTodos() {
        todos.forEach(todo => {
            employeeDetails.empTodos.push(todo);
        })
    }

    return (
        <div className="container mt-3">
            
            {   updateStatus ? 
                    <div className="alert alert-success alert-dismissible">
                        <button onClick={(e) => setUpdateStatus(false)} type="button" className="btn-close" data-bs-dismiss="alert"></button>
                        <strong>Successfully</strong> uploaded Employee details
                    </div> 
                    : 
                unSuccessful ?
                    <div className="alert alert-danger alert-dismissible">
                        <button onClick={(e) => setFailedStatus(false)} type="button" className="btn-close" data-bs-dismiss="alert"></button>
                        <strong>unSuccessful</strong> check your id and try again
                    </div>  
                    :
                    <div></div>
            }
             
            <h1 className='centerText'>Todos of the day</h1>
            <div className="mt-5 centerDiv">
                <form onSubmit={handleSubmit} className="form-control p-5 w-75 centerText">
                    <input 
                        className="form-control m-2" 
                        type="text" 
                        placeholder="your id" 
                        name="identifier"
                        value={inputs.identifier || ""}
                        onChange={handleChange}
                        required
                    />
                    {
                        !idEntered ? <p style={{ textAlign:"center", color:"red", margin: "0px", padding: "0px"}}>Please enter id first</p>
                        :
                        <p></p>
                    }
                    
                    <textarea 
                        className="form-control m-2" 
                        type="text"
                        rows={4} 
                        placeholder="todos, separate each with ;" 
                        value = {inputs.todos || ""}
                        name="todos" 
                        onChange={handleChange}
                        ></textarea>
                        {/* will make the following a child component */}
                        <p>
                            {
                                todos.map
                                (
                                    a_todo =>
                                        <span onClick={handleTodos} key={a_todo.id}
                                            className="text-muted rounded bg-primary fit-content"
                                            >{ a_todo.title }
                                        </span> 
                                )
                            }
                        </p>
                         
                    <button 
                        type="submit" 
                        className="btn btn-outline-success"
                    >Upload</button>
                </form>
            </div>
        </div>
    )
}
export default Component;