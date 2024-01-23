import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import skf from './skf.png';
import { useState } from 'react';
import { useNavigate }from 'react-router-dom';

function SignUp(){
  const navigate=useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    role:'',
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
const handleButtonClick = () => {
  if (formData.role.toLowerCase() === 'admin') {
     navigate('/admin-dash');
  } else if (formData.role.toLowerCase() === 'employee') {
     navigate('/employee-dash');
  }
 };
const handleChange = (e) => {
  e.preventDefault();
  const { name, value } = e.target;
  setFormData((prevState) => ({
    ...prevState,
    [name]: value,
  }));
  setAllFieldsFilled(Object.values(formData).every((val) => val !== ''));
};

  return (

    <div>
        <header className="header">
       <img src={skf} alt="Logo" className="header-logo" />
        <h1>SREE KNIT FASHIONS</h1>
       </header>
    <Card style={{ width: '20rem' }}>
        <Card.Header style={{fontFamily:'revert',fontSize:'20px',fontWeight:'bold'}}>SIGN-UP</Card.Header>
      <Card.Body>
        <Card.Text style={{fontFamily:'revert-reverse',fontSize:'15px'}}>Are you a new Employee?</Card.Text>
        <Card.Text style={{fontFamily:'revert-reverse',fontSize:'15px'}}>Then Sign-Up</Card.Text>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="validationCustom01">
        <Form.Label style={{fontFamily:'revert-reverse',fontSize:'18px'}}>USERNAME</Form.Label>
        <Form.Control required type="text" placeholder="Enter your UserName" name="username" onChange={handleChange}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="validationCustom02">
        <Form.Label style={{fontFamily:'revert-reverse',fontSize:'18px'}}>PASSWORD</Form.Label>
        <Form.Control required type="password" placeholder="Enter your password" name="password" onChange={handleChange}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="validationCustom03">
        <Form.Label style={{fontFamily:'revert-reverse',fontSize:'18px'}}>ROLE</Form.Label>
        <Form.Control required type="text" placeholder="Enter your role" name="role" onChange={handleChange}/>
      </Form.Group>
      </Form>
      <div>
    
        <Button variant="primary" type="submit" disabled={!allFieldsFilled} onClick={handleButtonClick}>SIGN-UP</Button>
      </div>
        <Card.Text style={{fontFamily:'revert-reverse',fontSize:'15px'}}>Already an Employee?</Card.Text>
        <Card.Text style={{fontFamily:'revert-reverse',fontSize:'15px'}} >Then Login</Card.Text>
      
        <Button variant="dark" type="submit" onClick={()=>navigate('/login')}>LOGIN</Button>

      </Card.Body>
    </Card>
    </div>
  );
}
export default SignUp;