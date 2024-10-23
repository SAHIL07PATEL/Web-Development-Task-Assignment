import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { addUsers } from './reducer';
import { useDispatch } from 'react-redux';

let id=2;
function AddUsers() {

    const [name,setName] = useState('')
   const dispatch =  useDispatch();
   const navigate = useNavigate();

    const handleSubmit =(e)=>{

        e.preventDefault();
        // alert(name)

        dispatch(addUsers({id:id++,name:name}));
        navigate('/')

    }
  return (
    <div>
       <div className="container">
        <div className="row justify-content-center text-start">
          <div className="col-xl-8">
            <div>
              <h2>Add users</h2>
              <Link to="/" className="btn btn-warning my-3">
                {" "}
                Go Back
              </Link>
            </div>
            <div>
                    <form onSubmit={handleSubmit}>
                        <div className='form-group'>
                            <label>Name : </label>
                            <input type="text" name="" value={name}
                            onChange={(e)=>{setName(e.target.value)}}
                            className='form-control' />
                        </div>
                        <div className='form-group'>
                           
                            <input type="submit" name="" value="Add" classN0ame='btn my-3 btn-primary' />
                        </div>
                    </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddUsers
