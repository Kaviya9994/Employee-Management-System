import React, { useState } from "react";
import { Form ,Button,Card} from "react-bootstrap";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function Create(){
  const [values,setValues]=useState({
    id:'',
    username:'',
    email:'',
    salary:'',
    address:'',
    phoneNumber:''
  })
  const navigate=useNavigate();
  const handleSubmit=(e)=>{
    e.preventDefault();
    axios.post('http://localhost:3000/users',values)
    .then(res=>{
      console.log(res);
      navigate('/home')
    })
    .catch(err=> console.log("error: "+err))
  }
    return(
        <div>
            <Card style={{width:'20rem'}}>
              <Card.Header style={{fontFamily:'revert-reverse',fontSize:'18px'}}>ADD EMPLOYEE</Card.Header>
            <Form onSubmit={handleSubmit}>
      <Form.Group controlId="Id">
        <Form.Label style={{fontFamily:'revert-reverse',fontSize:'18px',fontWeight:'bold'}}>ID</Form.Label>
        <Form.Control type="text" name="id" required onChange={e=>setValues({...values,id: e.target.value})} />
      </Form.Group>

      <Form.Group controlId="Username">
        <Form.Label style={{fontFamily:'revert-reverse',fontSize:'18px',fontWeight:'bold'}}>UserName</Form.Label>
        <Form.Control type="text" name="username" required onChange={e=>setValues({...values,username: e.target.value})}/>
      </Form.Group>

      <Form.Group controlId="Email">
        <Form.Label style={{fontFamily:'revert-reverse',fontSize:'18px',fontWeight:'bold'}}>Email</Form.Label>
        <Form.Control type="email" name="email" required onChange={e=>setValues({...values,email: e.target.value})}/>
      </Form.Group>
      <Form.Group controlId="Salary">
        <Form.Label style={{fontFamily:'revert-reverse',fontSize:'18px',fontWeight:'bold'}}>Salary</Form.Label>
        <Form.Control type="text" name="salary" required onChange={e=>setValues({...values,salary: e.target.value})}/>
      </Form.Group>

      <Form.Group controlId="Address">
        <Form.Label style={{fontFamily:'revert-reverse',fontSize:'18px',fontWeight:'bold'}}>Address</Form.Label>
        <Form.Control type="text" name="address" required onChange={e=>setValues({...values,address: e.target.value})} />
      </Form.Group>

      <Form.Group controlId="honeNumber">
        <Form.Label style={{fontFamily:'revert-reverse',fontSize:'18px',fontWeight:'bold'}}>Phone Number</Form.Label>
        <Form.Control type="tel" name="PhoneNumber" required onChange={e=>setValues({...values,phoneNumber: e.target.value})} />
      </Form.Group>
      <Button variant="success" style={{marginBottom:'10px',marginTop:'10px',marginRight:'10px'}} type="submit">Submit</Button>
      <Button variant="danger"  onClick={() => {alert("Form cancelled");window.location.href = '/home'}}>Cancel</Button>
    </Form>
</Card>
        </div>
    )
}
export default Create;