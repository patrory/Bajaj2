import React, { useEffect, useState } from 'react'
import axios from 'axios'

const User = () => {
    const [users,setUsers] = useState([]) ;
    useEffect(()=>{
        const fetchUser = async ()=>{
            try {
                const res =await axios.get("http://localhost:8800/active") ;
                console.log(res.data)
                setUsers(res.data) ;
            } catch (error) {
                console.log(error)
            }
        }
        fetchUser();
    },[])
  return (
    // <div>
    //     <h2>Online Users</h2>
    //     <div className="users">
    //        {users.map((user)=>{
    //         <div className="user" key={user.socketId}>
    //             <h3> {user.userName} </h3>
    //         </div>
    //        })}
    //     </div>
    // </div>
    
    <div>
    <h2>Online Users</h2>
    <div className="users">
        {users.map((user) => (
            <div className="user" key={user.socketId}>
                <div style={{
                    width: '10px',
                    height: '10px',
                    borderRadius: '50%',
                    backgroundColor: 'green',
                    marginRight: '10px'
                }}></div> {/* Green dot */}
                <h3>{user.userName}</h3>
            </div>
        ))}
    </div>
</div>
    
  )
}

export default User