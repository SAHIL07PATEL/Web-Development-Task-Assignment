import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table, Button, Container } from 'react-bootstrap';
import './App.css'; // You can add your custom styles here
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser, showUser } from './fetures';

const UserTable = () => {
  // const users = [
  //   { name: 'Adam Marcus', email: 'adam123@gmail.com', contact: '836736736735', address: 'UK' },
  //   { name: 'Tommy', email: 'tom@gmail.com', contact: '8376664676', address: 'Japan' },
  //   { name: 'James Bond', email: 'james@gmail.com', contact: '9484768787', address: 'France' },
  //   { name: 'Larry', email: 'larry@gmail.com', contact: '347846746', address: 'UK' },
  //   { name: 'Steve', email: 'steve@gmail.com', contact: '9348484887', address: 'Aus' }
  // ];


  const dispatch =  useDispatch();

  const {users,loading} = useSelector((state)=>state.app)
  

  useEffect(() => {
    dispatch(showUser())
  }, []);

  if(loading){
    return <h1 className='loading'>Loading...</h1>
  }


  return (
    <Container className="mt-5">

      <Link to="/adduser">
        <Button variant='info mb-5'>Add User</Button>
      </Link>
      <Table striped bordered hover >
        <thead >
          <tr >
            <th>Name</th>
            <th>Email</th>
            <th>Contact</th>
            <th>Address</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users && users.map((user, index) => (
            <tr key={index}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.contact}</td>
              <td>{user.address}</td>
              <td>
                <Button variant="danger" onClick={()=> dispatch(deleteUser(user.id))} className="me-2">DELETE</Button>
               
                <Link to={`/edituser/${user.id}`} ><Button variant="primary">Edit</Button></Link>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default UserTable;
