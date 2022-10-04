import React, { useEffect, useState } from 'react';
import axios from 'axios'
import "./HomeStyle.css";



export default function Home() {

          const [id,updateId]=useState("");
          const [name,updateName]=useState("");
          const [email,updateEmail]=useState("");
          const [phonenumber,updatePhoneNumber]=useState("");
          const [password,updatePassword]=useState("");
        

          const handleName =(event)=>{
            updateName(event.target.value);
          }

          const handleEmail =(event)=>{
              updateEmail(event.target.value);
          }

          const handlePhoneNumber =(event)=>{
            updatePhoneNumber(event.target.value);
          }

          const handlePassword =(event)=>{
            updatePassword(event.target.value);
          }


const edit =(id)=>{
     data.forEach(element => {
      if(element.id===id){
        updateId(element.id);
        updateName(element.name);
        updateEmail(element.email);
        updatePassword(element.password);
        updatePhoneNumber(element.phonenumber)
      }
     });
}


const updateData =async(id)=>{
     await axios.put(`http://localhost:3333/data/${id}`,{

      id:id,
      name:name,
      email:email,
      phonenumber:phonenumber,
      password:password
    
     }).then((res)=>{
     alert('data updated successfully');
     }).catch((error)=>{
      console.log(error);
     })
     getUser();
}


const [data, setData] = useState([{}]);

  useEffect(() => {
    getUser();

  }, [])

  const getUser = async () => {
    await axios.get("http://localhost:3333/data").then((res) => {
      setData(res.data);

    });
  }
      


  const handleDelete = async (id) => {
    await axios.delete('http://localhost:3333/data/' + id).then(() => {
      alert('deleted successfully');
    }).catch((err) => {
      console.log(err)
    })
  
     getUser();
  }




  return (
    <>
      <h2 className='heading '>CRUD WITH JSON SERVER</h2>

      <section>
        <table className="table">
          <thead className="thead-dark tablehead">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th>Phone Number</th>
              <th scope="col">Operations</th>
            </tr>
          </thead>
          <tbody>

            {
              data.length>0 ? data.map((user) => (

                <tr>
                  <th scope="row">{user.id}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.phonenumber}</td>

                  <button type="button" className="btn btn-warning mx-4 my-2 p-2 editbtn" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => edit(user.id)}>Edit</button>

                  <button type="button" className="btn btn-danger deletebtn p-2" onClick={() => handleDelete(user.id)}>Delete</button>

                </tr>

              )) : <h5>
                Add User To Show Here
              </h5>
            }
          </tbody>
        </table>
        {/* <button className='addbtn'>Add</button> */}
        <a href="http://localhost:3000/create"><button className='addbtn'>Add</button></a>
      </section>


{/* //modal for update user  */}
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Updata User</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">






              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
                <input type="text" className="form-control" value={name} onChange={handleName} id="exampleFormControlInput1" />

                <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                <input type="email" className="form-control" value={email} onChange={handleEmail} id="exampleFormControlInput1" />

                <label htmlFor="exampleFormControlInput1" className="form-label">Phone Number</label>
                <input type="number" className="form-control" value={phonenumber} onChange={handlePhoneNumber} id="exampleFormControlInput1" />

                <label htmlFor="exampleFormControlInput1" className="form-label">Password</label>
                <input type="password" className="form-control" value={password} onChange={handlePassword} id="exampleFormControlInput1" />
              </div>




            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary" onClick={()=>updateData(id)}>Save changes</button>
            </div>
          </div>
        </div>
      </div>







      
      



    </>

  

  );
}
