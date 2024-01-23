import React from "react";
import { Button,Card ,Form} from "react-bootstrap";
import {useState,useEffect} from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
function Update(){
    const { id }=useParams();
    const [values,setValues]=useState({
      id:'',
      username:'',
      email:'',
      address:'',
      phoneNumber:''
    })
const navigate=useNavigate();
    useEffect(() => {
        axios.get('http://localhost:3000/users/'+id)
        .then(res=>{
          setValues(res.data)})
        .catch(err=> console.log("error: "+err)) },[id])

  const handleUpdate=(event)=>{
  event.preventDefault();
   axios.put('http://localhost:3000/users/'+id,values)
    .then(res=>{
      console.log(res);
      navigate('/home')
    })
    .catch(err=> console.log("error: "+err))
        }
    return(
        <div>
            <Card style={{width:'20rem'}}>
                <Card.Header style={{fontFamily:'revert-reverse',fontSize:'18px'}}>EDIT DETAILS</Card.Header>
            <Form onSubmit={handleUpdate}>
      <Form.Group controlId="id">
        <Form.Label style={{fontFamily:'revert-reverse',fontSize:'18px',fontWeight:'bold'}}>ID</Form.Label>
        <Form.Control type="text" name="id" required value={values.id} onChange={e=>setValues({...values,id: e.target.value})} />
      </Form.Group>

      <Form.Group controlId="username">
        <Form.Label style={{fontFamily:'revert-reverse',fontSize:'18px',fontWeight:'bold'}}>UserName</Form.Label>
        <Form.Control type="text" name="username" required value={values.username} onChange={e=>setValues({...values,username: e.target.value})}/>
      </Form.Group>

      <Form.Group controlId="email">
        <Form.Label style={{fontFamily:'revert-reverse',fontSize:'18px',fontWeight:'bold'}}>Email</Form.Label>
        <Form.Control type="email" name="email" required  value={values.email}onChange={e=>setValues({...values,email: e.target.value})}/>
      </Form.Group>
      <Form.Group controlId="salary">
        <Form.Label style={{fontFamily:'revert-reverse',fontSize:'18px',fontWeight:'bold'}}>Salary</Form.Label>
        <Form.Control type="text" name="salary" required  value={values.salary}onChange={e=>setValues({...values,salary: e.target.value})}/>
      </Form.Group>

      <Form.Group controlId="address">
        <Form.Label style={{fontFamily:'revert-reverse',fontSize:'18px',fontWeight:'bold'}}>Address</Form.Label>
        <Form.Control type="text" name="address" required value={values.address} onChange={e=>setValues({...values,address: e.target.value})}/>
      </Form.Group>

      <Form.Group controlId="phoneNumber">
        <Form.Label style={{fontFamily:'revert-reverse',fontSize:'18px',fontWeight:'bold'}}>Phone Number</Form.Label>
        <Form.Control type="tel" name="phoneNumber" required value={values.phoneNumber}onChange={e=>setValues({...values,phoneNumber: e.target.value})}/>
      </Form.Group>
      <Button variant="success" style={{marginBottom:'10px',marginTop:'10px',marginRight:'10px'}} type="submit">Update</Button>
      <Button variant="danger"  onClick={() => {alert("Form cancelled");window.location.href = '/home'}}>Cancel</Button>
    </Form>
</Card>
        </div>
    )
}
export default Update;