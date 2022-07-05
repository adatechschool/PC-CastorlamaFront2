import React from 'react'
function Basket(props) {
    const{cartItems, onAdd, onRemove}=props;

return (
    <div>
    <h2>Panier</h2>
    <div>
        {cartItems.length ===0 && <div> Cart is Empty</div>}
        {cartItems.map((item)=> (
            <div key={item.id} className="row">
            <div className="col-2">{item.title}</div>
            <div className="col-2">
            <button onClick={()=>onAdd(item)} className="add">+</button>
            <button onClick={()=>onRemove(item)} className="remove">_</button>
            </div>
            <div className="col-2 text-right">
                {item.qty} x ${item.price.toFixed(2)}
            </div>
            </div>
       ))}
    
    </div>
    </div>
)
}

export default Basket