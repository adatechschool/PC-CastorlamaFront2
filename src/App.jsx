import React, {useState} from 'react'
import Banner from './components/Banner.jsx'
import Promotion from './components/Promotion.jsx'
import Cards from './components/Cards.jsx'
import Product from './components/Product.jsx'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import {data} from './datas/Data.jsx'
//component creation 

const App = () => {
    const [show,setShow]=useState(true)
    return (
        <div>
            
           <Banner></Banner>
           {show?<Promotion></Promotion>:null }
            {show?<Cards>
            <h1 className='titre_card'>Les dernières trouvailles</h1>
        <div className='container_card'>
            {/* <h1 className='titre_card'>Les dernières trouvailles</h1> */}
            { 
                data.map(({ id, title, price, type, image_url }) => {
                    return (

                            <Card key={id} className='card' style={{ width: '25rem' }} onClick={()=>setShow(!show)}>
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
                            
                    )
                })
            }

        </div>
            </Cards>:null}
            {!show?<Product></Product>:null}
        
        </div>
    );
}

export default App;
