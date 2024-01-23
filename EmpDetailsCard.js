import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import {  useNavigate } from 'react-router-dom';
import skf from './skf.png';
import Button from 'react-bootstrap/Button';
const EmpDetailsCard=()=> {
    let navigate=useNavigate();
    const handleClick=()=>{
        navigate(-1);
    }
    return (
       <div>
  <header style={{paddingLeft:'0px',marginLeft:'0px'}} className="header">
       <img src={skf}  alt="Logo" className="header-logo" />
        <h1>SREE KNIT FASHIONS</h1>
       </header>
         <Card style={{width:'20rem',borderRadius:'15px'}}>
           <Card.Body>
            <Card.Header style={{fontFamily:'revert-reverse',fontWeight:'bold',fontSize:'20px'}}>DETAILS</Card.Header>
             <Card.Title>NAME:</Card.Title>
             <Card.Text>DEPARTMENT:</Card.Text>
             <Card.Text>DESIGNATION:</Card.Text>
             <Card.Text>E-MAIL:</Card.Text>
             <Card.Text>SALARY IN ₹:</Card.Text>
             <Card.Text>ADDRESS:</Card.Text>
             <Button onClick={handleClick} variant="dark">EDIT DETAILS</Button>
        
           </Card.Body>
         </Card>
       </div>
    );
   }
   export default EmpDetailsCard;