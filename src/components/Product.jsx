import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Carousel from 'react-bootstrap/Carousel'
import table2 from '../assets/table2.png'
import table3 from '../assets/table3.png'
import table4 from '../assets/table4.png'
import '../styles/Product.scss'
import Button from 'react-bootstrap/Button'


function Product (props) {

return (
    <Row className="mt-5">
       <div className="ms-5 mb-3 accueil" onClick={props.tata}>Accueil</div>
        <Col className="ms-5">
        <Carousel>
  <Carousel.Item>
    <div className="carouselimg">
    <img
      className="d-block w-100"
      src={table2}
      alt="First slide"
    />
    </div>
    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <div className="carouselimg">
    <img
      className="d-block w-100"
      src={table3}
      alt="Second slide"
    />
    </div>

    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <div className="carouselimg">
    <img
      className="d-block w-100"
      src={table4}
      alt="Third slide"
    />
    </div>
    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </Col>
        <Col className="ms-5 me-5">
            <Row>
                <Col><h3 className="titreproduct blibli">TABLE ANCIENNE</h3></Col>
                <Col><h3 className="titreproduct">200€</h3></Col>
                <Col><h3 className="titreproduct">FAVORIS</h3></Col>
            </Row>
            <Row className="mt-5">
                <h4>Description</h4>
                <h6>TABLE</h6>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis architecto vitae quam enim et explicabo deserunt similique expedita vero, deleniti hic, magnam suscipit obcaecati itaque sit in dolores aut voluptatum?Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae inventore magnam animi nemo. Unde hic quaerat sunt sequi architecto. Vitae animi eum neque eligendi deleniti molestiae quisquam accusamus accusantium eius?</p>
                <p></p>
            </Row>
            <Row>
                <Col>
                    <Row>
                        <Col><p><strong>Dimensions:</strong> h:60cm l:180cm p:200cm</p></Col>
                        <Col><p><strong>Matériaux:</strong> bois</p></Col>
                    </Row>
                    <Row>
                        <Col><p><strong>Couleurs:</strong> bois</p></Col>
                        <Col><p><strong>Catégorie:</strong> table</p></Col>
                    </Row>
                </Col>
            </Row>
            <Row className="mt-5 d-flex justify-content-start">
              <div className='btn-product'>
                <Button variant="outline-success addtobasket">AJOUTER AU PANIER</Button> 
                <Button variant="outline-success contactsaler">CONTACTER LE VENDEUR</Button> 
                </div>
            </Row>
        </Col>
    </Row>

)

}

export default Product;

