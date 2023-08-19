import './styling/comp1.css';

function HomeComp() {
    return (
        <div className="container mt-3">
            <h1 className="centerText">Employee Task Manager</h1>
            
            <div className='centerDiv mt-5'>
                <div className='btn-group mt-2 w-100'>
                    <a href="/" className='btn btn-primary'>Today's Plan</a>
                    <a href="/" className='btn btn-info'>Achieved</a>
                </div>
            </div>

            <div className='Horizontal_Layout'>
                <section className="card mt-3 me-1">
                    <h3 className='border border-top-0'>Recently Logged<span className='text-primary w-25'>(New)</span></h3>

                    <div className='mt-3'>
                        <div className='employeeCard shadow me-5 ms-5'>
                            <div className='w-50'><span className='border rounded-circle bg-light'></span></div>
                            <div className='w-50'><p className='float-start mt-3'>Lionel Messi</p></div>

                            <div className="dropdown m-2">
                                <button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown">
                                    Tasks
                                </button>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="/">Link 1</a></li>
                                    <li><a className="dropdown-item" href="/">Link 2</a></li>
                                </ul>
                            </div>

                        </div>
                        <div className='employeeCard shadow me-5 ms-5'>
                            <div className='w-50'><span className='border rounded-circle bg-light'></span></div>
                            <div className='w-50'><p className='float-start mt-3'>Naruto Uzumaki</p></div>
                            
                            <div className="dropdown m-2">
                                <button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown">
                                    Tasks
                                </button>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="/">Link 1</a></li>
                                    <li><a className="dropdown-item" href="/">Link 2</a></li>
                                </ul>
                            </div>

                        </div>
                        <div className='employeeCard shadow me-5 ms-5'>
                            <div className='w-50'><span className='border rounded-circle bg-light'></span></div>
                            <div className='w-50'><p className='float-start mt-3'>John Cena</p></div>
                            
                            <div className="dropdown m-2">
                                <button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown">
                                    Tasks
                                </button>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="/">Link 1</a></li>
                                    <li><a className="dropdown-item" href="/">Link 2</a></li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </section>
 
                <section className="card mt-3 me-1">
                    <h3 className='border border-top-0'>Priority Projects<span className='text-danger'>(!)</span></h3>
                    <div className='table-responsive'>
                    <table className='table table-hover'>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Company</th>
                                    <th>Duration</th>
                                    <th>Progress</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>ooo</td>
                                    <td>ooo</td>
                                    <td>ooo</td>
                                    <td><input type='checkbox'/> 50%</td>
                                </tr>
                                <tr>
                                    <td>ppp</td>
                                    <td>ppp</td>
                                    <td>ppp</td>
                                    <td><input type='checkbox'/> 50%</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>
            </div>
        </div>
    )
}
export default HomeComp;