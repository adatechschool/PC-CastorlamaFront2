import '../styles/Card.scss'
import Card from 'react-bootstrap/Card' 
import Button from 'react-bootstrap/Button' 
import Table from '../assets/table.png'

// const data = [
//     {
//       box: 'portfolio__item',
//       id: 1,
//       image: IMG2,
//       title: 'Ride my bike : Dataviz velib',
//       github: 'https://github.com/Helene-Normant/Ride_my_bike'
//     },
  
//     {
//       box: 'portfolio__item_2',
//       id: 2,
//       image: IMG1,
//       title: 'Emoji pimp : Extension chrome',
//       github: 'https://github.com/Helene-Normant/pimp_emoji'
//     },
  
//     {
//       box: 'portfolio__item_3',
//       id: 3,
//       image: IMG3,
//       title: 'Adacademy : jeux pico-8',
//       github: 'https://github.com/Helene-Normant/helene-normant.github.io'
//     }
  
//   ]
  
  
  
  
//   const Portfolio = () => {
//     return (
//       <section id="portfolio">
//         <h5>MES PROJETS</h5>
//         <div className='container portfolio__container'>
//           {
//             data.map(({box, id, image, title, github }) => {
//               return (
//                 <article key={id} className={box}>
//                   <div className='portfolio__item-image'>
//                     <img src={image} alt="" />
//                   </div>
//                   <h3>{title}</h3>
//                   <div className='portfolio__item-cta'>
//                     <a href={github} className='btn-new' target='_blank'> ⇨ Go </a>
//                   </div>
//                 </article>
  
//               )
  
//             })
//           }
  
//         </div>
//       </section>
//     )
//   }
  
//   export default Portfolio


const Cards = () => {
    return (
           
        <div className='container_card'>
            <h1 className='titre_card'>Les dernières trouvailles</h1>
        <Card  className='Card' style={{ width: '18rem' }}>
            {/* Type de meuble */}
        <Card.Title className='type_card'>Table</Card.Title>
  <Card.Img variant="top" src={Table} />
  <Card.Body>
     {/* Titre du meuble*/}
     <Card.Text>
      Table en bois massif 
    </Card.Text>
    <div className='info_card'>
    <Card.Text className='prix'>
     200€
    </Card.Text>
    <Button className='btn_card' variant="primary">ACHETER</Button>
    </div>
  </Card.Body>
</Card>
    </div> );
}
 
export default Cards;
