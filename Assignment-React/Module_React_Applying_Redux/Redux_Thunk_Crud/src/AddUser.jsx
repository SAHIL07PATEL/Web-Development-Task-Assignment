import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { createUser } from './fetures';

const AddUser = () => {

    const navigate = useNavigate();

    const [userData,setUserData] = useState({});
    const dispatch = useDispatch()

    const getUserData = (e) =>{
        setUserData({...userData,[e.target.name]:e.target.value})
    } 

    const handleSubmitData = (e) =>{
        e.preventDefault();
        console.log(userData);
        dispatch(createUser(userData));
        navigate("/")
    }

    return (
        <div>
            <Container className="mt-5 p-4" style={{ backgroundColor: '#2c2c2c', borderRadius: '8px' }}>
                <h2 className="text-white mb-4">Add New User</h2>
                <Form onSubmit={handleSubmitData} >
                    <Form.Group controlId="formName" className="mb-3">
                        <Form.Label className="text-white">Name</Form.Label>
                        <Form.Control
                            type="text"
                            name="name"
                            onChange={getUserData}
                            placeholder="Enter name"
                            required
                        />
                    </Form.Group>

                    <Form.Group controlId="formEmail" className="mb-3">
                        <Form.Label className="text-white">Email</Form.Label>
                        <Form.Control
                            type="email"
                            name="email"
                            onChange={getUserData}
                            placeholder="Enter email"
                            required
                        />
                    </Form.Group>

                    <Form.Group controlId="formContact" className="mb-3">
                        <Form.Label className="text-white">Contact</Form.Label>
                        <Form.Control
                            type="text"
                            name="contact"
                            onChange={getUserData}
                            placeholder="Enter contact"
                            required
                        />
                    </Form.Group>

                    <Form.Group controlId="formAddress" className="mb-3">
                        <Form.Label className="text-white">Address</Form.Label>
                        <Form.Control
                            type="text"
                            name="address"
                            onChange={getUserData}
                            placeholder="Enter address"
                            required
                        />
                    </Form.Group>

                    <Button variant="primary" type="submit" className="me-3">
                        Add User
                    </Button>

                    <Link to="/">
                        <Button variant="secondary" >
                            Cancel
                        </Button>
                    </Link>

                </Form>
            </Container>
        </div>
    );
}

export default AddUser;
