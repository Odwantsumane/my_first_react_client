import { useState } from 'react';
import axios from 'axios';

const USERS_REST_API_URL = 'http://127.0.0.1:4000/employee/updateTodoStatus/';

function  Comp2(props) {
    const [taskChecked, setCheckedTask] = useState({"id":"", "checked":false});

    const handleChange = (event) => {
        const todoId = event.target.name;
        const todoDone = event.target.checked;

        setCheckedTask({ id:todoId, checked:todoDone });
        updateTodoStatus(todoId,todoDone);
    }

    const updateTodoStatus = (id, td) => {
        // /updateTodoStatus/:todoId
        axios.put(USERS_REST_API_URL + `${id}`, {"done": td})
                .then(
                function(response) {
                    console.log(response);
                }).catch(function(error)
                {
                    alert("Server error: check console for more info")
                    console.log(error);
                });
    }

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
                                <td>
                                    {/* will create a child component to do this later */}
                                    <div className="dropdown">
                                        <button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown">
                                            Tasks
                                        </button>
                                        
                                        <ul className="dropdown-menu">
                                            
                                            {
                                                item.empTodos.map(todo =>
                                                    <li className="dropdown-item" key={todo.id}>
                                                        {
                                                            todo.done ? 
                                                            <>
                                                                <input name={todo.id} onChange={handleChange} type="checkbox" checked/>
                                                                    {todo.title}
                                                                <p className="text-success">done</p>
                                                            </>
                                                            :
                                                            <>
                                                                <input name={todo.id} onChange={handleChange} type="checkbox" checked={false}/>
                                                                    {todo.title}
                                                                <p className="text-danger">not done</p>
                                                            </>
                                                            
                                                        }
                                                         
                                                    </li>
                                                )
                                            }
                                        </ul>
                                    </div>
                                </td>
                            </tr> 
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Comp2;