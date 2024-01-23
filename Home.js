import React, { useEffect, useState } from "react";
import {Link} from 'react-router-dom';
import { Button } from "react-bootstrap";
import axios from 'axios';
function Home(){
    const [data,setData]=useState([])
   
    useEffect(()=>{
        axios.get('http://localhost:3000/users')
        .then(res=>setData(res.data))
        .catch(err=> console.log("error: "+err))
    },[])
    
    async function handleDelete(e) {
        e.preventDefault();
        let employeeId = e.target.dataset.id;
        await axios.delete(`http://localhost:3000/users/${employeeId}`)
        .catch(err => console.log("error: "+err))
        const response = await axios.get('http://localhost:3000/users')
        .catch(err=> console.log("error: "+err))
       
    if (response) {
        setData(response.data);
    }
    }
    return(
        <div className='d-flex flex-column justify-content-center align-items-center bg-light'>
            <h1>Employee List</h1>
            <div className=' rounded bg-white border shadow p-4 '>
                <div className='d-flex justify-content-end'>
                <Link to="/create">
                <Button variant="success">Add</Button>
                </Link>
                </div>
             <table className='table table-striped'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>UserName</th>
                        <th>Email</th>
                        <th>Salary</th>
                        <th>Address</th>
                        <th>Phone Number</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((d,i)=>(
                            <tr key={i}>
                                <td>{d.id}</td>
                                <td>{d.username}</td>
                                <td>{d.email}</td>
                                <td>{d.salary}</td>
                                <td>{d.address}</td>
                                <td>{d.phoneNumber}</td>
                                <td>
                                    <Link to={"/update"}>
                                    <button className='btn btn-sm btn-primary me-2'>Edit</button>
                                    </Link>
                                    <button onClick={handleDelete}  data-id={d.id} className='btn btn-sm btn-danger'>Delete</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
             </table>
            </div>
        </div>
        
    )
   
}
export default Home;