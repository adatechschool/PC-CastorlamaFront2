import React from 'react'
import '../styles/Card.scss'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { data } from '../datas/Data'


const Cards = (props) => {

    return (
        <div>
            <h1 className='titre_card'>Les dernières trouvailles</h1>
            <div className='container_card'>
                {/* <h1 className='titre_card'>Les dernières trouvailles</h1> */}
                {
                    data.map(({ id, title, price, type, image_url }) => {
                        return (
                            <div className='foo' onClick={props.toto}>
                                <Card key={id} className='card' style={{ width: '25rem' }} >
                                    {/* Type de meuble */}
                                    <Card.Title className='type_card'>{type}</Card.Title>
                                    <div className="img_card align-items-center justify-content-center">
                                        <Card.Img variant="top" src={image_url} />
                                    </div >
                                    <Card.Body>
                                        {/* Titre du meuble*/}
                                        <Card.Text>
                                            {title}
                                        </Card.Text>
                                        <div className='info_card'>
                                            <Card.Text className='prix'>
                                                {price}€
                                            </Card.Text>
                                            <Button className='btn_card' variant="primary">ACHETER</Button>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </div>
                        )
                    })
                }

            </div>
        </div>)
}




export default Cards;