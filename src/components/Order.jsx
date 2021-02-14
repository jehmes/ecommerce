import React from 'react'
import './order.css';
import cart from '../assets/cart-icon.svg'

const Order = props => {  
    let total = 0

    //calculate the total value
    for (let i=0; i < props.cart.length; i++) {        
        total +=  props.cart[i].price      
    }
    
    //show how many itens in cart
    const frete = number => {   
            return number.cart.length * 10       
    }
    
    return (
        <div className="order">
            <p>VALOR TOTAL</p>
            <p>R$ {total.toFixed(2)}</p>
            <span><img src={cart}alt="imagem" className='cart'/></span>
            <span> {props.cart.length}</span>
            {/* if the freigth total value is higher than 250, show free */}
            <p>Frete: {frete(props).toFixed(2) > 250 ? 'Grátis': `R$${frete(props).toFixed(2)}`}</p>
        </div>
    )
}

export default Order;