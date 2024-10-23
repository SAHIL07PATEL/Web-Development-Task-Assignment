import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { addUser } from './reducer';
import { useDispatch } from 'react-redux';


let id = 2; 
const Adduser = () => {
    const [name, setname] = useState('');
    const dispatch = useDispatch()

    const useNav = useNavigate()

    const handleSubmit = (e) =>{
        e.preventDefault();
        dispatch(addUser({id:id++, name :name}))
        useNav('/')
    }
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-8">
                        <div>
                            <h2>Add User</h2>
                            <Link to="/" className='btn btn-warning my-3'>
                                {" "}
                                Go Back
                            </Link>
                        </div>

                        <div>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label  className="form-label">Enter Your Name</label>
                                    <input type="text" className="form-control" onChange={(e)=>setname(e.target.value)}/>
                                </div>
                              
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Adduser;
