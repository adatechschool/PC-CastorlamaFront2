import React, { useState, useEffect } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Carousel from 'react-bootstrap/Carousel'
import table2 from '../assets/table2.png'
import table3 from '../assets/table3.png'
import table4 from '../assets/table4.png'
import '../styles/Product.scss'
import Button from 'react-bootstrap/Button'


function Product (props) {
  const{idProduct}=props;
  console.log(idProduct);
  const [error, setError] = useState(null);
  const [isLoadedProduct, setIsLoadedProduct] = useState(false);
  const [produit, setProduit] = useState({});

  // Remarque : le tableau vide de dépendances [] indique
  // que useEffect ne s’exécutera qu’une fois, un peu comme
  // componentDidMount()

  useEffect(() => {
    if (idProduct) {
    fetch(`http://localhost:3001/api/furnitures/${idProduct}`)
    
      .then(resProduct => resProduct.json())
      .then(
        (resultProduct) => {
          
          console.log(resultProduct.data);
          console.log(produit);
          setProduit(resultProduct.data);   
          setIsLoadedProduct(true);
        },
        // Remarque : il faut gérer les erreurs ici plutôt que dans
        // un bloc catch() afin que nous n’avalions pas les exceptions
        // dues à de véritables bugs dans les composants.
        (error) => {
          setIsLoadedProduct(true);
          setError(error);
        }
      )
    }
  }, [])

  if (error) {
    return <div>Erreur : {error.message}</div>;
  } else if (!isLoadedProduct) {
    return <div>Chargement...</div>;
  } else {
return (
    <Row className="mt-5">
       <div className="ms-5 mb-3 accueil" onClick={props.tata}>Accueil</div>
        <Col className="ms-5">
        <Carousel>
  <Carousel.Item>
    <div className="carouselimg">
    <img
      className="d-block w-100"
      src={produit.image_url[0]}
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
      src={produit.image_url[1]}
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
      src={produit.image_url[2]}
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
                <Col><h3 className="titreproduct blibli">{produit.name}</h3></Col>
                <Col><h3 className="titreproduct">{produit.price}€</h3></Col>
                <Col><h3 className="titreproduct">FAVORIS</h3></Col>
            </Row>
            <Row className="mt-5">
                <h4>Description</h4>
                <h6>{produit.type.toUpperCase()}</h6>
                <p>{produit.description}</p>
                <p></p>s
            </Row>
            <Row>
                <Col>
                    <Row>
                        <Col><p><strong>Dimensions: </strong>{produit.size}</p></Col>
                        <Col><p><strong>Matériaux: </strong>{produit.material[0]}, {produit.material[1]}</p></Col>
                    </Row>
                    <Row>
                        <Col><p><strong>Couleurs: </strong> {produit.color}</p></Col>
                        <Col><p><strong>Catégorie: </strong>{produit.type}</p></Col>
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
}

export default Product;

