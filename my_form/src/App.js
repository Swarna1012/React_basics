// import React,{useState} from 'react';
// import FormInput from './components/FormInput';
// import './App.css'

// const App = () => {
//     const [values , setValues] = useState({
//         email: "",
//         fname: "",
//         lname: "",
//         mobile: "",
//         dob: "",
//         address: "",
//     });


//     const handleSubmit =(e) =>{
//         event.preventDefault();
//         const data = new FormData(e.target)
//         console.log(data);
//     }

//     const inputs=[
//         {id:1, name:"email",placeholder:"Email ID", type:"email", label:"Email",
//             errorMessage:"Enter a valid E-mail id",
//             required:true,},
//         {id:2, name:"fname",placeholder:"First name", type:"text", label:"First name",
//             errorMessage:"It shouldn't contain any numeric value and special characters",
//             pattern: "^[A-Za-z]{3,16}$",
//             required:true,},
//         {id:3, name:"lname",placeholder:"Last name", type:"text", label:"Last name",
//             errorMessage:"It shouldn't contain any numeric value and special characters",
//             pattern: "^[A-Za-z]{3,16}$",
//             required:true,},
//         {id:4, name:"mobile",placeholder:"Mobile", type:"text", label:"Mobile",
//             errorMessage:"No alphabets or special characters are allowed",
//             pattern: "^[0-9]{10}$",
//             required:true,},
//         {id:5, name:"dob",placeholder:"Date of Birth", type:"date", label:"DoB",
//             required:true,},
//         {id:6, name:"address",placeholder:"Address", type:"text", label:"Address",
//             errorMessage:"Required!",
//             pattern: "^[A-Za-z0-9]{0,50}$",
//             required:true,},
//     ];

//     const onChange = (e) =>{
//         setValues({...values, [e.target.name]: e.target.value})
//     }

//     return (
//     <div className="app">
        
//         <form onSubmit={handleSubmit}>
//             {inputs.map((input) => (
//                 <FormInput key={input.id} {...input} value={values[input.name]}
//                     onChange={onChange}/>
//             ))}
//             <button>Submit</button>
//         </form>
//     </div>
// )}

// export default App;

import React from "react";

import {BrowserRouter as Router, Route, Routes, BrowserRouter } from "react-router-dom";
import Homepage from "./components/Homepage";
import About from "./components/About";
import Login from "./components/Login";

function App() {
    return(
       <Router>
        <Routes>
                <Route path="/" element={<Login />}/>
                <Route path="/homepage" element={<Homepage />}/>
                <Route path="/homepage/about" element={<About />}/>
                <Route path="/edit-employee/:id" element={<About />}/>

                {/* <Route path="/" element={<Homepage />}/>
                <Route path="/about" element={<About />}/>
                <Route path="/edit-employee/:id" element={<About />}/>
                <Route path="/login" element={<Login />}/> */}
        </Routes>
        </Router>
    );
};

export default App




// "jest": {
//     "testEnvironment": "jsdom"
//   },

// "moduleNameMapper": {
//     "\\.css$": "identity-obj-proxy"
//   }, 

// "jest": {
//     "moduleNameMapper": {
//       "\\.css$": "identity-obj-proxy"
//     },
//     "transform": {
//       "\\.js$": "babel-jest",
//       ".+\\.(css|scss|png|jpg|svg)$": "jest-transform-stub"
//     }
//   },