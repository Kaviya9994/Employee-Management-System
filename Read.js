import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Button } from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router-dom";
function Read(){
    const [data,setData]=useState([])
    const location = useLocation();
    const { id } = location.state;

    useEffect(() => {
        axios.get('http://localhost:3000/users/'+id)
        .then(res=>setData(res.data))
        .catch(err=> console.log("error: "+err)) },[id])
    return(
        <div className='d-flex justify-content-center align-items-center bg-light'>
            <div className='border bg-white shadow px-5 pt-3 pb-5 rounded'>
                <h3>Details of user</h3>
                <div className='mb-2'>
                    <strong>ID:{data.id}</strong>
                </div>
                <div className='mb-2'>
                    <strong>USERNAME:{data.username}</strong>
                </div>
                <div className='mb-2'>
                    <strong>EMAIL:{data.email}</strong>
                </div>
                <div className='mb-2'>
                    <strong>ADDRESS:{data.address}</strong>
                </div>
                <div className='mb-2'>
                    <strong>PHONE NUMBER:{data.phoneNumber}</strong>
                </div>
                <Link to={`/update/${id}`}>
                <Button variant="success" style={{marginRight:'10px'}}> Edit</Button>
                </Link>
                <Link to="/home">
                    <Button variant="primary">Back</Button>
                </Link>
            </div>
            
        </div>
    )
}
export default Read;