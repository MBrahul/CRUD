import axios from 'axios';
import React, {useEffect, useState } from 'react'


export default function Create() {


  const [data, setData] = useState([{}]);

  useEffect(() => {
    getUser();
 

  }, [])

  const getUser = async () => {
    await axios.get("http://localhost:3333/data").then((res) => {
      setData(res.data);

    });
  }



  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [phonenumber,setPhoneNumber]=useState("");
  const [password,setPassword]=useState("");
 

  const handleName =(event)=>{
     setName(event.target.value);
  }

  const handleEmail =(event)=>{
      setEmail(event.target.value);
  }

  const handlePhoneNumber =(event)=>{
    setPhoneNumber(event.target.value);
  }

  const handlePassword =(event)=>{
    setPassword(event.target.value);
  }


  const addNewUser =async(e)=>{
    var newid;
    data.forEach(element => {
        newid=element.id;
    });
     await axios.post("http://localhost:3333/data",{
        id:newid+1,
        name:name,
        email:email,
        phonenumber:phonenumber,
        password:password
      }).then((res)=>{
        alert('data submitted successfully');
      }).catch((error)=>{
        console.log(error);
      })
      
   setName("");
   setEmail("");
   setPassword("");
   setPhoneNumber("");
   getUser();
   
  }
  return (
    <>
     <h2 className='heading'>Add New User</h2>
    <div className="container">
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
        <input type="text" className="form-control" value={name} onChange={handleName} id="exampleFormControlInput1"  />

        <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
        <input type="email" className="form-control" value={email} onChange={handleEmail} id="exampleFormControlInput1" />

        <label htmlFor="exampleFormControlInput1" className="form-label">Phone Number</label>
        <input type="number" className="form-control" value={phonenumber} onChange={handlePhoneNumber} id="exampleFormControlInput1" />

        <label htmlFor="exampleFormControlInput1" className="form-label">Password</label>
        <input type="password" className="form-control" value={password} onChange={handlePassword} id="exampleFormControlInput1"  />
      </div>

       
         <button className='addbtn ' onClick={addNewUser}>Add</button>
         <a href="http://localhost:3000"><button className='addbtn mx-4'>Back</button></a>
        
      </div>
    </>
  )
}
