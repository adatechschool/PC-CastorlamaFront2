import React, { useState } from 'react'
import Banner from './components/Banner.jsx'
import Promotion from './components/Promotion.jsx'
import Product from './components/Product.jsx'
import Cards from './components/Cards.jsx'
import Basket from './components/Basket.jsx'
//component creation 

const App = () => {

    const [show, setShow] = useState(true)
    const [cartItems, setCartItems] =useState([]);
    const onAdd=(product) => {
       const exist = cartItems.find(x => x.id ===product.id); 
       if(exist) {
        setCartItems(cartItems.map(x=> x.id ===product.id ? {...exist, qty: exist.qty + 1}: x
            )
        );
       } else {
            setCartItems([...cartItems, {...product, qty:1}]);
       }
    }
    const onRemove =(product)=> {
        const exist= cartItems.find((x)=>x.id === product.id);
            if(exist.qty ===1) {
                setCartItems(cartItems.filter((x)=>x.id !== product.id));
            } else {
                setCartItems(
                    cartItems.map(x=> 
                    x.id ===product.id ? {...exist, qty: exist.qty - 1}: x));
            }
    }
    return (
        <div>
            <Banner></Banner>
            {show ? <Promotion></Promotion> : null}
            {show ? <Cards toto={() => setShow(!show)} onAdd={onAdd}></Cards> : null}
            {!show ? <Product tata={() => setShow(!show)}></Product> : null}
            <Basket cartItems={cartItems} onAdd={onAdd} onRemove={onRemove}></Basket>
        </div>
    ); 
}

export default App;