/*
import React,{useState} from 'react';
import FormInput from './FormInput';
import './about.css';
import EmployeeService from '../services/EmployeeService';
import { useNavigate } from "react-router-dom";

const About = () => {
    const [values , setValues] = useState({
        email_id: "",
        firstname: "",
        lastname: "",
        mobile: "",
        dob: "",
        address: "",
    });

    const navigate = useNavigate();


    const handleSubmit =(e) =>{
        e.preventDefault();
        //const employee = new FormData(e.target)
        // console.log(Object.fromEntries(data.entries()));

        var Lemail = document.getElementsByName("email_id");
        var remail = Lemail[0].value;
        var Lfname = document.getElementsByName("firstname");
        var rfname = Lfname[0].value;
        var Llname = document.getElementsByName("lastname");
        var rlname = Llname[0].value;
        var Lmobile = document.getElementsByName("mobile");
        var rmobile = Lmobile[0].value;
        var Ldob = document.getElementsByName("dob");
        var rdob= Ldob[0].value;
        var Laddress = document.getElementsByName("address");
        var raddress = Laddress[0].value;

        //console.log(remail, rfname, rlname, rmobile, rdob, raddress);
        const employee = {remail, rfname, rlname, rmobile, rdob, raddress};
        EmployeeService.createEmployee(employee).then((response) => {
            console.log(response.data);
            navigate('/');
        }).catch(error => {
            console.log(error);
        })
    }

    const inputs=[
        {id:1, name:"email_id",placeholder:"Email ID", type:"email", label:"Email",
            errorMessage:"Enter a valid E-mail id",
            required:true,},
        {id:2, name:"firstname",placeholder:"First name", type:"text", label:"First name",
            errorMessage:"It shouldn't contain any numeric value and special characters",
            pattern: "^[A-Za-z]{3,16}$",
            required:true,},
        {id:3, name:"lastname",placeholder:"Last name", type:"text", label:"Last name",
            errorMessage:"It shouldn't contain any numeric value and special characters",
            pattern: "^[A-Za-z]{3,16}$",
            required:true,},
        {id:4, name:"mobile",placeholder:"Mobile", type:"text", label:"Mobile",
            errorMessage:"No alphabets or special characters are allowed",
            pattern: "^[0-9]{10}$",
            required:true,},
        {id:5, name:"dob",placeholder:"Date of Birth", type:"date", label:"DoB",
            required:true,},
        {id:6, name:"address",placeholder:"Address", type:"text", label:"Address",
            errorMessage:"Required!",
            pattern: "^[A-Za-z0-9]{0,50}$",
            required:true,},
    ];

    const onChange = (e) =>{
        setValues({...values, [e.target.name]: e.target.value})
    }

    return (
    <div className="app">
        
        <form onSubmit={handleSubmit}>
            {inputs.map((input) => (
                <FormInput key={input.id} {...input} value={values[input.name]}
                    onChange={onChange}/>
            ))}
            <button>Submit</button>
        </form>
    </div>
)}

export default About;
*/


/*
import React,{ useEffect, useState} from "react";
import './about.css';
import EmployeeService from '../services/EmployeeService';
import { useNavigate, useParams } from "react-router-dom";
//import { useForm } from "react-hook-form";

const About = () => {
    const [email_id, setEmail_id] = useState('');
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [mobile, setMobile] = useState('');
    const [dob, setDob] = useState('');
    const [address, setAddress] = useState('');
    const navigate = useNavigate();
    const {id} = useParams();


    const SaveOrUpdate = (e) => {
        e.preventDefault();

        const employee = {email_id, firstname, lastname, mobile, dob, address};

        if(id){
            EmployeeService.updateEmployee(id,employee).then((response) => {
                navigate('/');
                console.log(response.data);
               
            }).catch(error => {
                console.log(error);
            })    
        }
        else{
            EmployeeService.createEmployee(employee).then((response) => {
                navigate('/');
                console.log(response.data);
               
            }).catch(error => {
                console.log(error);
            })    
            }
        }

    useEffect(() => {
        EmployeeService.getEmployeeById(id).then((response) => {
            console.log(email_id, firstname, lastname, mobile, dob, address);
            setEmail_id(response.data.email_id)
            setFirstname(response.data.firstname)
            setLastname(response.data.lastname)
            setMobile(response.data.mobile)
            setDob(response.data.dob)
            setAddress(response.data.address)
        }).catch(error => {
            console.log(error)
        })
    }, [])

    const title = () => {
        if(id){
            return <h2 className="text-center">Update User</h2>
        }
        else{
            return <h2 className="text-center">Add User</h2>
        }
    }

    return (
        <div className="app">
            <div className="row">
                <div className="card">
                    { title() }
                    <div className="card-body">
                        <form>
                            <div>
                                <label>E-mail</label>
                                <input 
                                    name="email_id" 
                                    placeholder="Email ID" 
                                    type="email" value={email_id}
                                    //errorMessage="Enter a valid E-mail id"
                                    required={true}
                                    onChange={(e) => setEmail_id(e.target.value)}
                                    // {...register("name",{required: true})}
                                /> 
                            </div>
                            <div>
                                <label>First name</label>
                                <input 
                                    name="firstname" 
                                    placeholder="Email ID" 
                                    type="text" value={firstname}
                                    //errorMessage="Enter a valid E-mail id"
                                    required={true}
                                    onChange={(e) => setFirstname(e.target.value)}
                                /> 
                            </div>
                            <div>
                                <label>Last name</label>
                                <input 
                                    name="lastname" 
                                    placeholder="Email ID" 
                                    type="text" value={lastname}
                                    //errorMessage="Enter a valid E-mail id"
                                    required={true}
                                    onChange={(e) => setLastname(e.target.value)}
                                /> 
                            </div>
                            <div>
                                <label>Mobile</label>
                                <input 
                                    name="mobile" 
                                    placeholder="Email ID" 
                                    type="text" value={mobile}
                                    //errorMessage="Enter a valid E-mail id"
                                    required={true}
                                    onChange={(e) => setMobile(e.target.value)}
                                /> 
                            </div>
                            <div>
                                <label>Date of Birth</label>
                                <input 
                                    name="dob" 
                                    placeholder="Email ID" 
                                    type="date" value={dob}
                                    //errorMessage="Enter a valid E-mail id"
                                    required={true}
                                    onChange={(e) => setDob(e.target.value)}
                                />
                            </div>
                            <div>
                                <label>Address</label>
                                <input 
                                    name="address" 
                                    placeholder="Email ID" 
                                    type="text" value={address}
                                    //errorMessage="Enter a valid E-mail id"
                                    required={true}
                                    onChange={(e) => setAddress(e.target.value)}
                                /> 
                            </div>
                            
                            <button onClick={(e) => SaveOrUpdate(e)}>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;
*/



import React,{ useEffect, useState} from "react";
import './about.css';
import EmployeeService from '../services/EmployeeService';
import { useNavigate, useParams } from "react-router-dom";
import FormInput from "./FormInput";
import img1 from "/home/divum/Desktop/Training/React_basics/my_form/src/images/Untitled.png";


const About = () => {
    const [email_id, setEmail_id] = useState('');
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [mobile, setMobile] = useState('');
    const [dob, setDob] = useState('');
    const [address, setAddress] = useState('');
    const navigate = useNavigate();
    const {id} = useParams();

   
    const SaveOrUpdate = (e) => {
        e.preventDefault();
        const employee = {email_id, firstname, lastname, mobile, dob, address};
        console.log(employee)

        if(email_id!="" && firstname!="" && lastname!="" && mobile!="" && dob!="" && address!="" && ValidateEmail(email_id) && ValiditeName(firstname) && ValiditeName(lastname) && ValidateMobile(mobile) && ValidateDate(dob) && ValidateAddress(address)){
            if(id){
                EmployeeService.updateEmployee(id,employee).then((response) => {
                    // navigate('/');
                    navigate('/homepage');
                    console.log(response.data);
                
                }).catch(error => {
                    // console.log(error);
                })    
            }
            else{
                EmployeeService.createEmployee(employee).then((response) => {
                    // navigate('/');
                    navigate('/homepage');
                    console.log(response.data);
                
                }).catch(error => {
                    console.log(error);
                })   
            }
        }
        else{
            alert('Please fill all the details');
        }
    }   

        console.log("use   " + email_id, firstname, lastname, mobile, dob, address);
        
    useEffect(() => {
        {
            EmployeeService.getEmployeeById(id).then((response) => {
                console.log("inside   " + email_id, firstname, lastname, mobile, dob, address);
                setEmail_id(response.data.email_id)
                setFirstname(response.data.firstname)
                setLastname(response.data.lastname)
                setMobile(response.data.mobile) 
                setDob(response.data.dob)
                setAddress(response.data.address)
                console.log("end   " + email_id, firstname, lastname, mobile, dob, address);

            }).catch(error => {
                // console.log(error)
            })
        }
    }, []);

    const title = () => {
        if(id){
            return <h2 className="text-center">UPDATE USER</h2>
        }
        else{
            return <h2 className="text-center">REGISTER USER</h2>
        }
    }

    function ValidateEmail(email_id){
        return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email_id);
    }

    function ValiditeName(firstname){
        return /^[A-Za-z]{1,16}$/.test(firstname);
    };

    function ValidateMobile(mobile){
        return /^[0-9]{10}$/.test(mobile);
    }

    function ValidateDate(dob){
        var givenDate = new Date(dob);
        var currentDate = new Date();

        if (givenDate.getTime() > currentDate.getTime()) {
            alert('The given date is in the future.');
            return false;
        }else{
            return true;
        }
    }

    function ValidateAddress(address){
        return /^(\d{1,}) [a-zA-Z0-9\s]+(\,)? [a-zA-Z]+(\,)? [A-Z]{2} [0-9]{5,6}$/.test(address);
    }

    return (
        <div>
        <div className="top_style">
            <div className="logo1_style">
                <img src={img1} alt="" height={120} width={120}></img>
            </div>
            <div className="back_style">
                <button className="add-button back-button" onClick={() => navigate('/homepage')}>BACK</button>
            </div>
        </div>
        <div className="app">
            <div className="row">
                <div className="card">
                    { title() }
                    <div className="card-body">
                        <form className="form-about">
                            <div>
                                <FormInput name="email_id" placeholder="Enter Email ID" type="email" label="E-mail"
                                    errorMessage="Enter a valid E-mail-id!" value={email_id}
                                    onChange={(e) => setEmail_id(e.target.value)}
                                    defaultValue={email_id}/>
                            </div>
                            <div>
                                <FormInput name="firstname" placeholder="Enter First Name" type="text" label="First Name"
                                    errorMessage="Enter a valid Firstname!" value={firstname}
                                    pattern="^[A-Za-z]{1,16}$"
                                    onChange={(e) => setFirstname(e.target.value)}
                                    />
                            </div>
                            <div>
                                <FormInput name="lastname" placeholder="Enter Last Name" type="text" label="Last Name"
                                    errorMessage="Enter a valid Lastname!" value={lastname}
                                    pattern="^[A-Za-z]{1,16}$"
                                    onChange={(e) => setLastname(e.target.value)}/>
                            </div>
                            <div>
                                <FormInput name="mobile" placeholder="Enter Mobile number" type="text" label="Mobile"
                                    errorMessage="Enter a valid Mobile number!" value={mobile}
                                    pattern="^[0-9]{10}$"
                                    onChange={(e) => setMobile(e.target.value)}/>
                            </div>
                            <div>
                                <FormInput name="dob" type="date" className="txtdate" label="Date of Birth"
                                    errorMessage="Enter a valid Dob!" value={dob}
                                    onChange={(e) => setDob(e.target.value)}
                                    />
                            </div>
                            <div className="form-group">
                                <FormInput name="address" placeholder="Enter Address" type="text" label="Address"
                                    errorMessage="Enter a valid Address" value={address} className="address_box"  
                                    // pattern="^[A-Za-z0-9]{3,50}$" 
                                    pattern="/^(\d{1,}) [a-zA-Z0-9\s]+(\,)? [a-zA-Z]+(\,)? [A-Z]{2} [0-9]{5,6}$/"
                                    onChange={(e) => setAddress(e.target.value)}/>
                            </div>
                            <button className="submit_btn" onClick={(e) => SaveOrUpdate(e)}>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default About;

