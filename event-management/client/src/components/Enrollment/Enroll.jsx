import React, { useEffect,useState } from 'react'
import Axios from 'axios'
const Enroll = () => {
    const[event,setevent]=useState([])
   useEffect(()=>{
    Axios.get('http://localhost:3001/admin/eve').then(function (response) {
          setevent(response.data)
          console.log(response.data)
        })
   },[])
  return (
    <div className='relative h-screen'>{
    event.map((eve)=>{
                return(
                  <div>
                    <h1>{eve.name}</h1>
                    {
                      eve.res1.map((res)=>(
                        <h1>{res.user}</h1>
                      ))
                    }
                  </div>
                )
              })
      }
    </div>
  )
}

export default Enroll
