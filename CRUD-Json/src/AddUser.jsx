/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const AddUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("")

  const navigate = useNavigate()



  useEffect(() => {
    fetch("http://localhost:4000/users", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      });
  }, []);




  const handleSubmit = (e) => {
    e.preventDefault();
    const jsonData = { name, email, phone, country };

    if (jsonData.name !== "" && jsonData.email !== "" && jsonData.phone !== "" && jsonData.country !== "") {

      let findUser = users.find(
        (user) => user.email.toLowerCase() === jsonData.email.toLowerCase()
      );
      if (findUser) {
        alert("User already exists");
      } else {
        fetch("http://localhost:4000/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(jsonData),
        })
          .then((res) => {
            if (res.ok) { // Check if response is successful
              alert("Created...");
              navigate("/");
            } else {
              alert("Error creating user.");
            }
          })
          .catch((err) => {
            alert("Network error occurred.");
            console.error(err);
          });
      }

    }

  }


  return (
    <div>
      <div className="container">
        <div className="row justify-content-center text-start">
          <div className="col-lg-6">
            <h1 className="text-center">Welcome to my website</h1>

            <div>
              <Link to="/" className="btn btn-warning my-3">
                Go Back
              </Link>
            </div>

            <form action="" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="my-2">
                  Name :
                </label>
                <input
                  type="text"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  name=""
                  id=""
                  placeholder="Enter name"
                  className="form-control"
                />
              </div>
              <div>
                <label htmlFor="name" className="my-2">
                  Email :
                </label>
                <input
                  type="email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  name=""
                  id=""
                  placeholder="Enter Email"
                  className="form-control"
                />
                <h6 className="fs-6">Set Valid Email</h6>
              </div>
              <div>
                <label htmlFor="name" className="my-2">
                  Phone :
                </label>
                <input
                  type="text"
                  onChange={(e) => {
                    setPhone(e.target.value);
                  }}
                  name=""
                  id=""
                  placeholder="Enter Phone Number"
                  className="form-control"
                />
              </div>
              <div>
                <label htmlFor="name" className="my-2">
                  Country :
                </label>
                <input
                  type="text"
                  onChange={(e) => {
                    setCountry(e.target.value);
                  }}
                  name=""
                  id=""
                  placeholder="Country"
                  className="form-control"
                />
              </div>
              <div>
                <input
                  type="submit"
                  value="SUBMIT"
                  placeholder="Enter"
                  className="btn btn-primary mt-3"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddUser;
