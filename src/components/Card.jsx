import React, { useState } from 'react'
import './card.css'

const Card = props => {

    const [products] = useState(props.data)
    const cart = props.cart
    const setCart = props.setCart
    const addToCart = (product) => {
        setCart([...cart, product])

    }

    const removeToCart = product => {        
        setCart(cart.splice(cart.indexOf(product) + 1, cart.length))       
    }

    return (
        <>            
            <div className='card'>
                <h3>
                    {products.name}
                </h3>

                <img
                    src={products.image}                    
                    alt='Nome produto'
                />
                <h3 >
                    R$ {products.price}
                </h3>
                <div>
                    <h3>Score: {props.data.score}</h3>

                    <button className='btn' onClick={() => {
                        addToCart(products)
                    }}>Adicionar</button>
                    <button className='btn' onClick={() => {
                        removeToCart(products)
                    }}>Remover</button>
                </div>
            </div>
        </>

    )

}

export default Card