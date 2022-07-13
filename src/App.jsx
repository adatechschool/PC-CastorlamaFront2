import React, { useState } from 'react'
import Banner from './components/Banner.jsx'
import Promotion from './components/Promotion.jsx'
import Product from './components/Product.jsx'
import Cards from './components/Cards.jsx'
import Basket from './components/Basket.jsx'
//component creation 

const App = () => {

    const [showBasket, setShowBasket] = useState(false)
    const[showProduct, setShowProduct] =useState(false)
    const [cartItems, setCartItems] =useState([]);
    const [idProduct, setIdProduct]=useState();
    const getIdProduct=(id) => {
        setIdProduct(id);
    }
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
            <Banner countCartItems={cartItems.length} tonton={() => setShowBasket(!showBasket)}></Banner>
            {!showBasket && !showProduct ? <Promotion></Promotion> : null}
            {!showBasket && !showProduct ? <Cards toto={() => setShowProduct(!showProduct)} onAdd={onAdd} getIdProduct={getIdProduct}></Cards> : null}
            {!showBasket && showProduct? <Product tata={() => setShowProduct(!showProduct)} getIdProduct={getIdProduct} idProduct={idProduct}></Product> : null}
            {showBasket && !showProduct?<Basket cartItems={cartItems} onAdd={onAdd} onRemove={onRemove}></Basket>:null}
        </div>
    ); 
}

export default App;