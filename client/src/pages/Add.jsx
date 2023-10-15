// import React, { useState } from 'react'

// const Add = () => {
//     const [userName , setUserName] = useState("") ;
//     const handleChange = (e)=>{
//         e.preventDefault(); 
//         setUserName(e.target.value)
//     }
//     console.log(userName)
//   return (
//     <div className="form">
//         <h1>CHat application</h1>
//         <input type="text" placeholder='UserName'  name='userName' />
//         <button type='submit' onClick={handleChange}>Submit</button>
//     </div>
//   )
// }

// export default Add

import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Add = () => {
    const navigate = useNavigate()
    const [userName, setUserName] = useState('');

    const handleSubmit = async(e) => {
        e.preventDefault(); // Prevents the form from being submitted

        try {
            await axios.post("http://localhost:8800/user",{userName:userName},{
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            navigate('/user')
        } catch (error) {
            return error
        }
        console.log(userName);
    };

    const handleChange = (e) => {
        setUserName(e.target.value);
    };

    return (
        <div className="form">
            <h1>Chat Application</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="UserName"
                    name="userName"
                    value={userName}
                    onChange={handleChange}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Add;
