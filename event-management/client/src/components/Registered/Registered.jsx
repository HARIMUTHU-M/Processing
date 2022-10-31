import React, {useEffect,useState} from 'react'
import { selectCurrentUser} from "../../features/authSlice";
import { useSelector} from "react-redux";
import axios from "axios"
const Registered = () => {
    const user = useSelector(selectCurrentUser);
    const[event,setevent]=useState([]);
    useEffect(() => {
        axios.post('http://localhost:3001/userApi/reg-eve',{user:user.regno}).then(function (response) {
          setevent(response.data)
          console.log(response.data)
        })
      })
  return (
    <div>
      {event.map((eve)=>(
        <h1>{eve.name}</h1>
      )
      )}
    </div>
  )
}

export default Registered
