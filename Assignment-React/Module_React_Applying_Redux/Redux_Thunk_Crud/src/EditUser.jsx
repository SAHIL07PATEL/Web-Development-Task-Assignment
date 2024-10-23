import React, { useEffect, useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { editUser } from './fetures';

const EditUser = () => {



  const [editUserDetails, setEditUserDetails] = useState();

  const getUserData = (e) => {
    setEditUserDetails({ ...editUserDetails, [e.target.name]: e.target.value })
  }


  const { eid } = useParams();
  const { users, loading } = useSelector((state) => state.app)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    const singleUser = users.filter((ele) => ele.id === eid)
    setEditUserDetails(singleUser[0])

  }, []);

  const handleSubmitData = (e) => {
    e.preventDefault();
    dispatch(editUser(editUserDetails));
    navigate("/")
  }

  if(loading){
    return <h2 className='loading'>Loading..</h2>
  }

  return (
    <Container className="mt-5 p-4" style={{ backgroundColor: '#2c2c2c', borderRadius: '8px' }}>
      <h2 className="text-white mb-4">Edit User</h2>
      <Form onSubmit={handleSubmitData}>
        <Form.Group controlId="formName" className="mb-3">
          <Form.Label className="text-white">Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={editUserDetails && editUserDetails.name}
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
            value={editUserDetails && editUserDetails.email}

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
            value={editUserDetails && editUserDetails.contact}

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
            value={editUserDetails && editUserDetails.address}
            onChange={getUserData}
            placeholder="Enter address"
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="me-3">
          Save Changes
        </Button>
        <Button variant="secondary" >
          Cancel
        </Button>
      </Form>
    </Container>
  );
};

export default EditUser;
