import React, {useState} from 'react'
import Banner from './components/Banner.jsx'
import Promotion from './components/Promotion.jsx'
import Cards from './components/Cards.jsx'
import Product from './components/Product.jsx'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const data = [
    {
        id: 1,
        title: "Chaise en bois",
        type: "chaise",
        price: 10,
        description: "Superbe chaise en bois HYPER confortable",
        material: [
            "bois"
        ],
        color: "marron",
        size: "h:90cm l:45cm p:47cm",
        accepted: false,
        image_url: "https://res.cloudinary.com/oslanne/image/upload/c_scale,e_auto_contrast,w_500/v1656409611/cld-sample-5.jpg",
        created_at: "2022-06-29T14:40:27.500Z",
        edited_at: "2022-06-29T14:40:27.500Z"
    },
    {
        id: 2,
        title: "Super lit",
        type: "lit",
        price: 50,
        description: "Superbe lit en bois HYPER confortable",
        material: [
            "bois"
        ],
        color: "bleu",
        size: "h:60cm l:180cm p:200cm",
        accepted: true,
        image_url: "https://res.cloudinary.com/oslanne/image/upload/c_scale,e_auto_contrast,w_500/v1656409586/sample.jpg",
        created_at: "2022-06-29T14:40:27.500Z",
        edited_at: "2022-06-29T14:40:27.500Z"
    },
    {
        id: 3,
        title: "Tabouret",
        type: "tabouret",
        price: 15,
        description: "Superbe tabouret  HYPER confortable",
        material: [
            "metal"
        ],
        color: "vert",
        size: "h:90cm l:45cm p:47cm",
        accepted: false,
        image_url: "https://res.cloudinary.com/oslanne/image/upload/c_scale,e_auto_contrast,w_500/v1656409610/cld-sample.jpg",
        created_at: "2022-06-29T14:40:58.153Z",
        edited_at: "2022-06-29T14:40:58.153Z"
    },

    {
        id: 4,
        title: "Tabouret",
        type: "tabouret",
        price: 15,
        description: "Superbe tabouret  HYPER confortable",
        material: [
            "metal"
        ],
        color: "vert",
        size: "h:90cm l:45cm p:47cm",
        accepted: false,
        image_url: "https://res.cloudinary.com/oslanne/image/upload/c_scale,e_auto_contrast,w_500/v1656409610/cld-sample.jpg",
        created_at: "2022-06-29T14:40:58.153Z",
        edited_at: "2022-06-29T14:40:58.153Z"
    },
    {
        id: 5,
        title: "Tabouret",
        type: "tabouret",
        price: 15,
        description: "Superbe tabouret  HYPER confortable",
        material: [
            "metal"
        ],
        color: "vert",
        size: "h:90cm l:45cm p:47cm",
        accepted: false,
        image_url: "https://res.cloudinary.com/oslanne/image/upload/c_scale,e_auto_contrast,w_500/v1656409610/cld-sample.jpg",
        created_at: "2022-06-29T14:40:58.153Z",
        edited_at: "2022-06-29T14:40:58.153Z"
    },

    {
        id: 5,
        title: "Tabouret",
        type: "tabouret",
        price: 15,
        description: "Superbe tabouret  HYPER confortable",
        material: [
            "metal"
        ],
        color: "vert",
        size: "h:90cm l:45cm p:47cm",
        accepted: false,
        image_url: "https://res.cloudinary.com/oslanne/image/upload/c_scale,e_auto_contrast,w_500/v1656409610/cld-sample.jpg",
        created_at: "2022-06-29T14:40:58.153Z",
        edited_at: "2022-06-29T14:40:58.153Z"
    },
    {
        id: 6,
        title: "Tabouret",
        type: "tabouret",
        price: 15,
        description: "Superbe tabouret  HYPER confortable",
        material: [
            "metal"
        ],
        color: "vert",
        size: "h:90cm l:45cm p:47cm",
        accepted: false,
        image_url: "https://toutchientoutchat.com/wp-content/uploads/2020/04/arbre-%C3%A0-chat-gris-grande-capacit%C3%A9-multi-niveaux-avec-2-niches-hauteur-152-cm.jpg",
        created_at: "2022-06-29T14:40:58.153Z",
        edited_at: "2022-06-29T14:40:58.153Z"
    },
    {
        id: 5,
        title: "Tabouret",
        type: "tabouret",
        price: 15,
        description: "Superbe tabouret  HYPER confortable",
        material: [
            "metal"
        ],
        color: "vert",
        size: "h:90cm l:45cm p:47cm",
        accepted: false,
        image_url: "https://static.songmics.fr/image/Product/PCT98G/Arbre-a-chat-164-cm-gris-fonce-PCT98G-4.jpg",
        created_at: "2022-06-29T14:40:58.153Z",
        edited_at: "2022-06-29T14:40:58.153Z"
    }
]

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
