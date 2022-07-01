import '../styles/Card.scss'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Table from '../assets/table.png'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

// const Portfolio = () => {
//     return (
//         <section id="portfolio">
//             <h5>MES PROJETS</h5>
//             <div className='container portfolio__container'>
//                 {
//                     data.map(({ box, id, image, title, github, image_url }) => {
//                         return (
//                             <article key={id} className={box}>
//                                 <div className='portfolio__item-image'>
//                                     <img src={image_url} alt="" />
//                                 </div>
//                                 <h3>{title}</h3>
//                                 <div className='portfolio__item-cta'>
//                                     <a href={github} className='btn-new' target='_blank'> ⇨ Go </a>
//                                 </div>
//                             </article>

//                         )

//                     })
//                 }

//             </div>
//         </section>
//     )
// }



const Cards = ({ children }) => {
    return (
        <div>{ children }</div>  )
}

export default Cards;
