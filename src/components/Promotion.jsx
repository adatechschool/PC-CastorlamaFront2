import '../styles/Promotion.scss'
import Row from 'react-bootstrap/Row'
import Header from '../assets/header.png'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

function Promotion () {
    return (
        <Row className="promotionImage mt-4">
          <Col className='d-flex align-items-center justify-content-center'> 
          <div className='promotion-encart'> 
          <h3>LA SÉLECTION DU MOMENT</h3> 
          <div className='btn-promotion d-flex align-items-center justify-content-center'>
          <Button className="promotion-decouvrir">DÉCOUVRIR</Button>
          </div>
          </div>
          </Col>
        </Row> 
        
    )
}

export default Promotion