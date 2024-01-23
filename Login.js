import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Form, Button, Card } from 'react-bootstrap';
import skf from './skf.png';
import { useNavigate }from 'react-router-dom';
function Login() {
  const navigate=useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    
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
  <header className="header">
       <img src={skf} alt="Logo" className="header-logo" />
        <h1>SREE KNIT FASHIONS</h1>
       </header>
    <Card style={{width:'20rem'}}>
      <Card.Body>
        <Card.Title>LOGIN</Card.Title>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicUsername">
            <Form.Label style={{fontFamily:'revert-reverse', fontSize:'20px'}}>USERNAME</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your username"
              name="username"
              onChange={handleChange} required
            />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label style={{fontFamily:'revert-reverse', fontSize:'20px'}}>PASSWORD</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter your Password"
              name="password"
              onChange={handleChange} required
            />
          </Form.Group>
          <div className="d-grid gap-2">
          <Button variant="primary" type="submit" disabled={!allFieldsFilled} onClick={()=>navigate('/employee-dash')} className="mt-3">
            LOGIN
          </Button>
         </div>
        </Form>
      </Card.Body>
    </Card>
    </div>
 );
}

export default Login;