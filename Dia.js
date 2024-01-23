import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import dia from './dia1.jpg';
import dia2 from './dia2.jpg';
import dia3 from './dia3.jpg';
import dia4 from './dia4.jpg';
import dia5 from './dia5.jpg';
import dia6 from './dia6.jpg';
import dia7 from './dia7.jpg';
import dia8 from './dia8.jpg';
import dia9 from './dia9.jpg';
import dia10 from './dia10.jpg';
import {Row,Col} from 'react-bootstrap';
import skf from './skf.png';


function Dia() {
    const cardData=[
        { id: 1, image: dia, title: 'DIA 16' },
        { id: 2, image: dia2, title: 'DIA 18'},
        { id: 3, image: dia3, title: 'DIA 20'},
        { id: 4, image: dia4, title: 'DIA 22' },
        { id: 5, image: dia5, title: 'DIA 24'},
        { id: 6, image: dia6, title: 'DIA 26'},
        { id: 7, image: dia7, title: 'DIA 28'},
        { id: 8, image: dia8, title: 'DIA 30'},
        { id: 9, image: dia9, title: 'DIA 32'},
        { id: 10, image: dia10, title: 'DIA 34'},
    ]
  return (
    <div className="dia" >
      <header className="header">
       <img src={skf} alt="Logo" className="header-logo" />
        <h1>SREE KNIT FASHIONS</h1>
       </header>
        <Row style={{ justifyContent: 'space-between', padding: '15px'}}>
        {cardData.map((card) => (
          <Col style={{ marginBottom: '20px',marginTop:'80px'  }}  key={card.id}>
            <Card  style={{width:'10rem', cursor:'grab', borderColor: 'black',
                boxShadow: '5px 5px 5px 5px'}}>
              <Card.Img variant="top" src={card.image} />
              <Card.Body>
                <Card.Title>{card.title}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      </div>
  );
}

export default Dia;