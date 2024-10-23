import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { editUser } from './reducer';

const EditUser = () => {
    const users = useSelector(state=>state.userData)

    const dispatch = useDispatch();
    // console.log(users);

    const {eId} = useParams()

    const useNav = useNavigate();
    
    const existingUser = users.find((u)=>u.id == eId)

    const [editUsername, setEditUsername] = useState(existingUser.name);
    
    
    const handleSubmit = (e) =>{
        e.preventDefault();
        dispatch(editUser({id:eId,name:editUsername}))
        useNav('/');
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

                        <div>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label  className="form-label">Enter Your Name</label>
                                    <input type="text" className="form-control"  value={editUsername} onChange={(e)=>{setEditUsername(e.target.value)}}/>
                                </div>
                              
                                <button type="submit" className="btn btn-primary">Update</button>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default EditUser;
