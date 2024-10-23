import React from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

function ViewUser() {

    const users = useSelector(state=>state.usersData);
    const {vId} = useParams();
    // console.log(users)
   const existingUser =  users.filter((user)=>{return user.id == vId })
  
  console.log(existingUser[0])
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
            <div>
                <h3>ID: {vId} {existingUser[0].id}</h3>
                <h4>Name: {existingUser[0].name}</h4>
            </div>
          </div>
        </div>
      </div>{" "}
    </div>
  );
}

export default ViewUser;
