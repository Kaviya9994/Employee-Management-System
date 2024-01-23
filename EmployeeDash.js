import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Link }from 'react-router-dom'
import skf from './skf.png';
function EmployeeDash() {
  return (
    <div>
  <header className="header">
       <img src={skf} alt="Logo" className="header-logo" />
        <h1>SREE KNIT FASHIONS</h1>
       </header>
    <Card style={{width:'20rem',height:'12rem'}}>
      <Card.Header style={{fontFamily:'revert-reverse',fontSize:'20px'}}>SREE KNIT FASHIONS</Card.Header>
      <Card.Body>
        <Card.Title style={{fontFamily:'reevert-reverse' ,fontSize:'18px'}}>GIVE YOUR PERSONAL DETAILS </Card.Title>
        <Card.Text></Card.Text>
        <Link to="/employee-personal">
        <Button variant="primary" size="bg" style={{textDecoration:'none'}}>ADD +
        </Button>
        </Link>
      </Card.Body>
    </Card>
    </div>
  );
}

export default EmployeeDash;