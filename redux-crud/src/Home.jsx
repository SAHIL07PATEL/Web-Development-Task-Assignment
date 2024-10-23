
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {deleteUser} from './reducer'

const Home = () => {

    const users = useSelector(state=>state.userData)
    const dispatch = useDispatch();

    const handleDelete = (uid) =>{
       dispatch(deleteUser({id:uid}))
    }
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-8">
                       <div>
                        <h2>Add User</h2>
                            <Link to="/add" className='btn btn-warning my-3'>
                            {" "}
                            Add New
                            </Link>
                       </div>
                       <table className='table'>
                        <thead className='table-dark'>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Actions</th>
                                <th>Actions</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            users.map((u)=>(
                                <tr key={u.id}>
                                    <td>{u.id}</td>
                                    <td>{u.name}</td>
                                    <td>
                                        <Link to={`view/${u.id}`} className='btn btn-info'>View</Link>
                                    </td>
                                    <td>

                                        <Link to={`edit/${u.id}`} className='btn btn-success mx-2'>Edit</Link>
                                    </td>
                                    <td>

                                        <Link onClick={()=>{handleDelete(u.id)}} className='btn btn-danger'>Delete</Link>
                                    </td>
                                </tr>
                            ))
                        }
                        </tbody>
                       </table>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default Home;
