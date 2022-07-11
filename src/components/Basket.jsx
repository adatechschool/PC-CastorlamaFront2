import React from 'react'
import '../styles/Basket.scss'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
function Basket(props) {
    const{cartItems, onAdd, onRemove}=props;

return (
    <div>
    <div className="mt-5 paniertitre ">
        <h2>1. PANIER</h2>
        <h2 className="paniergris">2. ADRESSE</h2>
        <h2 className="paniergris">3. PAIEMENT</h2>
    </div>
    <Row className="mt-5">
    <Col xs={7}>
    <div className="panieritems">
        {cartItems.length ===0 && <div> Cart is Empty</div>}
        {cartItems.map((item)=> (
            <div className="panieritem">
            <div key={item.id} className="row d-flex align-items-center">
            <img className="panierimage" src={item.image_url[0]}></img>
            <div className="col-3"><h5 className="itemtitre">{item.name}</h5></div>
            <div className="col-2">
            <button onClick={()=>onAdd(item)} variant="primary" className="add">+</button>
            <button onClick={()=>onRemove(item)} className="remove">-</button>
            </div>
            <div className="col-2 text-right">
                <h5>{item.qty} x {item.price.toFixed(2)}€</h5>
            </div>
            </div>
            </div>
       ))}
    
    </div>
    </Col>
    <Col className="recapcol d-flex align-items-center ">
        <div className="divrecap">
        <h2 className="recapitulatif">Récapitulatif</h2>
        <p>1 produit</p>
        <p>Total produits</p>
        <p>200€</p>
        <p>Total livraisons</p>
        <p>0€</p>
        <p>Frais de service</p>
        <p>4,9€</p>
        <div className="divpayer d-flex align-items-center">
        <h4 className="prixtotal">PRIX TOTAL 207,9€</h4> 
        <Button variant="outline-success payer">PAYER</Button>
        </div>
        </div>
    </Col>
    </Row>
    </div>
)
}

export default Basket