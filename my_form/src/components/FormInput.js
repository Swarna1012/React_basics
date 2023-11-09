// import React, { useState } from 'react';
// import './formInput.css';

// const FormInput = (props) => {
//     const [focused,setFocused] = useState(false);
//     const {label,errorMessage, onChange, id, ...inputProps}=props;

//     const handleFoused = (e) => {
//         setFocused(true);
//     }
    
//     return (
//         <div className="formInput">
//             <label>{label}
//             <input onChange={onChange} {...inputProps} onBlur={handleFoused} focused={focused.toString()}></input>
//             <span>{errorMessage}</span>
//             </label>
//         </div>
//     );
// };

// export default FormInput


import React, { useState } from 'react';
import './formInput.css';

const FormInput = (props) => {
    const [focused,setFocused] = useState(false);
    const {label,errorMessage,onChange,value,id, ...inputProps}=props;

    const handleFoused = (e) => {
        setFocused(true);
    }
    
    return (
        <div className="formInput">
            <label>{label}
            <input onChange={onChange} {...inputProps} onBlur={handleFoused} focused={focused.toString()} 
                defaultValue={value} id={id}
                required={true}/>
            <span>{errorMessage}</span>
            
            </label>
           
        </div>
        
    );
};

export default FormInput


