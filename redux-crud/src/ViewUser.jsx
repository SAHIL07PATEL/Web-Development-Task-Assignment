import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

const ViewUser = () => {

    const { vId } = useParams()

    const users = useSelector(state => state.userData)

    const existingUser = users.filter((u) => u.id == vId)


    return (
        <div>
            <div className="container">
                <div className="row justify-content-center text-start">
                    <div className="col-xl-8">
                        <div>
                            <h2>View user Detail</h2>
                            <Link to="/" className="btn btn-warning my-3">
                                {" "}
                                Go Back
                            </Link>
                        </div>
                        <div className='shadow p-2'>
                            <h3>ID:{existingUser[0].id}</h3>
                            <h4>Name: {existingUser[0].name}</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ViewUser;
