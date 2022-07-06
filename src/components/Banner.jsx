import '../styles/Banner.scss'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl' 
import Basket from '../assets/basket2.png'

function Banner(props) {
    const {countCartItems}=props;
	return (
		<div>
		<Row className="pt-3">
                <Col className="colbanner d-flex align-items-center justify-content-center">
                <div className="burger">
                <span></span>
                </div>
                </Col>
                <Col xs={3} className="colbanner d-flex align-items-center"><Form className="d-flex form">
                    <FormControl
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    />
                    <Button variant="outline-success">Search</Button>
                    </Form>
                </Col>
                <Col className="colbanner d-flex align-items-center justify-content-center"><hr className="line"/></Col>
                <Col className="colbanner">
                    <h1 className="banner">CASTORLAMA</h1>
                </Col>
                <Col className="colbanner d-flex align-items-center justify-content-center"><span className="line"></span></Col>
                <Col xs={3}  className="colbanner d-flex align-items-center justify-content-center">
                    <Button variant="outline-success vendre">VENDRE</Button>
                    <Button variant="outline-success connection">SE CONNECTER</Button>
                </Col>
                <Col className="colbanner d-flex align-items-center justify-content-center"><img className="imagepanier" src={Basket} onClick={props.tonton}/>
                {countCartItems? (
                    <button className="badge">{countCartItems}</button>
                ): (
                    ''
                )}
                </Col>
            </Row>
			<Row>
				<Col></Col>
				<Col xs={1} className="sousbanner d-flex align-items-center justify-content-center"><div className="vintageFurniture d-flex justify-content-center text-wrap">VINTAGE FURNITURE</div></Col>
				<Col></Col>
			</Row>
			</div>
	)
	
}
export default Banner