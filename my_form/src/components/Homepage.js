import React, { useEffect } from "react";
import './homepage.css'
import img1 from "/home/divum/Desktop/Training/React_basics/my_form/src/images/Untitled.png";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import EmployeeService from "../services/EmployeeService";

const Homepage = () => {
  const navigate = useNavigate();
  const [employees , setEmployees] = useState([])

  useEffect(() => {
    getAllEmployees();
  }, [])

  const getAllEmployees =() => {
    EmployeeService.getAllEmployees().then((response) => {
    setEmployees(response.data)
    // console.log(response.data);
  }).catch(error => {
    console.log(error);
  })
}

  const deleteEmployee = (employeeId) => {
    EmployeeService.deleteEmployee(employeeId).then((response) =>{
      getAllEmployees();
    }).catch(error => {
      console.log(error);
    })
  }

  return (
    <div className="Homepage">
      <header>
      <nav id="navbar"> 
          <div className="logo_style">
            <img src={img1} alt="" height={120} width={120}></img>
          </div>
          <div className="btn_style">
            <button className="add-button" onClick={() => navigate('about')}>ADD</button>
          </div>
      </nav>
      </header>
      <div>
      <table className="table">
      {/* <table className="table table-border table-striped"></table> */}
        <thead>
          <tr>
            <th>Email-ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Mobile</th>
            <th>Date of Birth</th>
            {/* <th>Address</th> */}
            <th>Actions</th>
            </tr>
        </thead>
        <tbody>
          {
            employees.map(
              employee => 
              <tr key ={employee.id}>
                <td> {employee.email_id} </td>
                <td> {employee.firstname} </td>
                <td> {employee.lastname} </td>
                <td> {employee.mobile} </td>
                <td> {employee.dob} </td>
                {/* <td> {employee.address} </td> */}
                <td>
                  <Link className="btn btn-info" to={`/edit-employee/${employee.id}`}>Update</Link>
                  <button className="btn btn-danger" onClick={() => deleteEmployee(employee.id)}>Delete</button>
                </td>
              </tr>
            )
          }
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default Homepage;
