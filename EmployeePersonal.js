import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import skf from './skf.png';
import { useNavigate }from 'react-router-dom';
import { useState } from 'react';
function EmployeePersonal() {
  const navigate=useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    department: '',
    designation: '',
    email: '',
    salary: '',
    address: '',
 });
  const [validated, setValidated] = useState(false);
  const [allFieldsFilled, setAllFieldsFilled] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    setAllFieldsFilled(Object.values(formData).every((val) => val !== ''));
  };
  return (
    <div>
  <header style={{paddingLeft:'0px',marginLeft:'0px'}} className="header">
       <img src={skf}  alt="Logo" className="header-logo" />
        <h1>SREE KNIT FASHIONS</h1>
       </header>
    <Form noValidate validated={validated} onSubmit={handleSubmit} style={{height:'10px'}} >
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label style={{fontFamily:'revert-reverse',fontWeight:'bold'}}>NAME</Form.Label>
        <Form.Control type="text" placeholder="Enter your name" name="name"  onChange={handleChange} required />
       
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicDepartment">
        <Form.Label style={{fontFamily:'revert-reverse',fontWeight:'bold'}}>DEPARTMENT</Form.Label>
        <Form.Control type="text" placeholder="Enter your department" name="department"  onChange={handleChange} required/>
        
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicDesignation">
        <Form.Label style={{fontFamily:'revert-reverse',fontWeight:'bold'}}>DESIGNATION</Form.Label>
        <Form.Control type="text" placeholder="Enter your designation" name="designation"  onChange={handleChange} required />
      
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label style={{fontFamily:'revert-reverse',fontWeight:'bold'}}>E-MAIL</Form.Label>
        <Form.Control type="email" placeholder="Enter your E-mail address" name="email"  onChange={handleChange} required/>
       
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicsalary">
        <Form.Label style={{fontFamily:'revert-reverse',fontWeight:'bold'}}>SALARY IN ₹ </Form.Label>
        <Form.Control style={{width:'300px'}} type="text" placeholder="Enter your salary" name="salary"  onChange={handleChange} required/>
        
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicAddress">
        <Form.Label style={{fontFamily:'revert-reverse',fontWeight:'bold'}}>ADDRESS</Form.Label>
        <Form.Control as="textarea" placeholder="Enter your permanent address" rows={3} name="address"   onChange={handleChange} required/>
        
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check  type="checkbox" label="Check me out" feedbackType="invalid" required/>  
      </Form.Group>
      
      <Button variant="dark" size="lg" type="submit" disabled={!allFieldsFilled} onClick={()=>navigate('/emp-details-card')}>
        Submit
      </Button>
    </Form>
    </div>
  );
}
export default EmployeePersonal;