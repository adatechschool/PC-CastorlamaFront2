import React, { useState, useEffect } from 'react'
import '../styles/Card.scss'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { data } from '../datas/Data'
import { getByTestId } from '@testing-library/react'


const Cards = (props) => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    // Remarque : le tableau vide de dépendances [] indique
    // que useEffect ne s’exécutera qu’une fois, un peu comme
    // componentDidMount()
    useEffect(() => {
      fetch("http://localhost:3001/api/furnitures/")
        .then(res => res.json())
        .then(
          (result) => {
            console.log(result);
            setIsLoaded(true);
            setItems(result.data);

          },
          // Remarque : il faut gérer les erreurs ici plutôt que dans
          // un bloc catch() afin que nous n’avalions pas les exceptions
          // dues à de véritables bugs dans les composants.
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )
    }, [])

    if (error) {
      return <div>Erreur : {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Chargement...</div>;
    } else {
      return (
        <div>
            <h1 className='titre_card'>Les dernières trouvailles</h1>
            <div className='container_card'>
                {/* <h1 className='titre_card'>Les dernières trouvailles</h1> */}
                {items.map(item => (
                            <div className='foo'>
                                <Card key={item.id}  className='card' style={{ width: '25rem' }} >
                                    {/* Type de meuble */}
                                    <Card.Title className='type_card'>{item.name}</Card.Title>
                                    <div className="img_card align-items-center justify-content-center" onClick={()=> props.getIdProduct(item.id)}>
                                        <Card.Img variant="top" src={item.image_url[0]} onClick={props.toto}/>
                                    </div >
                                    <Card.Body>
                                        {/* Titre du meuble*/}
                                        <Card.Text>
                                            {item.title}
                                        </Card.Text>
                                        <div className='info_card'>
                                            <Card.Text className='prix'>
                                                {item.price}€
                                            </Card.Text>
                                            <Button className='btn_card' variant="primary" onClick={()=> props.onAdd(data[item.id-1])}>ACHETER</Button>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </div>
                        )
                    )
                }

            </div>
        </div>)

}
}




export default Cards;
