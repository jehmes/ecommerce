import React from 'react'
import './order.css';
import cart from '../assets/cart-icon.svg'

const Order = props => {  
    let subTotal = 0
    

    //calculate the subTotal value
    for (let i=0; i < props.cart.length; i++) {        
        subTotal +=  props.cart[i].price      
    }
    
    //show how many itens in cart
    const freight = number => {   
            return  number.cart.length * 10            
    }
  
    const freightFormated = freight(props).toFixed(2).replace('.',',')
    
    //calculate total according to the free delivery and subtotal
    const freightCondicion =  freight(props) > 250 ? 0 : freight(props)    
    const total = subTotal + freightCondicion    
    const totalFormated = total.toFixed(2).replace('.',',')
    
    return (
        <div className="order">
            <p>SUB TOTAL</p>
            <p>R$ {subTotal.toFixed(2).replace('.',',')}</p>
            <span><img src={cart}alt="imagem" className='cart'/></span>
            <span> {props.cart.length}</span>
            {/* if the freigth subTotal value is higher than 250, show free */}
            <p>Frete: {freight(props) > 250 ? 'Grátis': `R$${freightFormated}`}</p>
            <p>TOTAL: R${totalFormated}</p>
        </div>
    )
}

export default Order;