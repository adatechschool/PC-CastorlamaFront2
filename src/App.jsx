import React, { useState } from 'react'
import Banner from './components/Banner.jsx'
import Promotion from './components/Promotion.jsx'
import Product from './components/Product.jsx'
import Cards from './components/Cards.jsx'

//component creation 

const App = () => {

    const [show, setShow] = useState(true)

    return (
        <div>
            <Banner></Banner>
            {show ? <Promotion></Promotion> : null}
            {show ? <Cards toto={() => setShow(!show)} ></Cards> : null}
            {!show ? <Product tata={() => setShow(!show)}></Product> : null}
        </div>
    ); 
}

export default App;