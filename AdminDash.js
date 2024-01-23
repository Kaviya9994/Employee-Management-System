import React from 'react';
import { Navbar, Nav,Container,Form,Button,ListGroup,Card} from 'react-bootstrap';
import { useState } from 'react';
import note from './note.png';
import {Link }from 'react-router-dom';
function AdminDash() {
  const [notes, setNotes] = useState([]);
 const [input, setInput] = useState('');
 const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      setNotes([...notes, input]);
      setInput('');
    }
 };
 const handleDelete = (index) => {
  let updatedNotes = [...notes];
  updatedNotes.splice(index, 1);
  setNotes(updatedNotes);
 };
 return (
  <div>
    <Navbar collapseOnSelect fixed='top' expand='sm' bg='dark' variant='dark'>
      <Container>
      <Navbar.Brand  style={{fontSize:'30px',fontFamily:'revert-reverse'}}>SREE KNIT FASHIONS</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className='ms-auto'>
          <Nav.Link href="/dia">AVAILABLE DIA'S</Nav.Link>
          <Nav.Link href="/profile">PROFILE</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      </Container>
    </Navbar>
    <Link to="/home">
    <Button  variant="dark" size="lg" style={{position: 'absolute', left:'30px',top:'100px'}}>ADD EMPLOYEES</Button>
    </Link>
    <Card style={{position:'absolute',top:'100px',left:'1100px'}}> 
    <Card.Img variant="top" src={note} style={{height:'180px',width:'250px'}}/>
    <Card.Header style={{fontFamily:'revert-reverse',fontSize:'20px',textAlign:'center'}}>PUT ON YOUR NOTES</Card.Header>
    <Container style={{ marginTop: '10px',maxWidth:'300px'}}>
        <Form  onSubmit={handleSubmit}>
          <Form.Group style={{marginBottom:'10px'}}>
            <Form.Control type="text" value={input} onChange={(e) => setInput(e.target.value)} style={{padding:'10px,0'}} />
          </Form.Group>
          <Button variant="primary" type="submit">ADD</Button>
        </Form>
        <ListGroup style={{ marginTop: '20px' }}>
          {notes.map((note, index) => (
            <ListGroup.Item key={index}>{note}
            <Button
        variant="outline-danger"
        size="sm"
        onClick={() => handleDelete(index)}
        style={{ marginLeft: '10px'}}
      >Delete</Button>
      </ListGroup.Item>
          ))}
        </ListGroup>
      </Container>
      </Card>
      
    </div>
 );
}
export default AdminDash;