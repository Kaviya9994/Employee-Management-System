import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import thread1 from './thread1.jpg';
import skf from './skf.png';
import {Link }from 'react-router-dom';
import './App.css';
function Landing() {
  return (
    <div>
       <header className="header">
       <img src={skf} alt="Logo" className="header-logo" />
        <h1>SREE KNIT FASHIONS</h1>
       </header>
    <Card style={{ width: '22rem' }}>
    <Card.Body>
    <img src={thread1} alt="Thread" className="card-img-top" />
      <div className="d-grid gap-2">
      <Link to="/Signup" >
      <Button variant="primary" size="lg" style={{textDecoration:'none',marginTop:'10px'}} >GET STARTED</Button>
      </Link>
      </div>
    </Card.Body>
  </Card>
  </div>
  
  );
}

export default Landing;
