import React,{ useState} from 'react'

const Headers = () => {
  const [name,setName]=useState("thanuja")
  return (
    <div>
      <h2> my name is {name} </h2>
      <button onClick={()=>setName("ram")}>click here</button>
      
    </div>
  )
}

export default Headers