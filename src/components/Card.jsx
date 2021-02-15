import React, { useState } from 'react'
import './card.css'

const Card = props => {

    //receiving data from CarList to build the card
    const [products] = useState(props.data)

    //receiving cart and setCart from CardList to avoid render the cart according the quantity of products
    //if cart stay here, It will render 9 times the cart, cause there are 9 products
    const cart = props.cart
    const setCart = props.setCart

    let [count, setCount] = useState(0)

    const addToCart = (product) => {
        setCart([...cart, product])
        setCount(count + 1)
    }

    const removeToCart = product => {
        let cartCopy = [...cart]
        let index = cartCopy.indexOf(product)
        if (index !== -1) {
            cartCopy.splice(index, 1)
            setCart(cartCopy)
            setCount(count - 1)
        }
    }

    //formated price
    const price = products.price
    const priceFormated = price.toFixed(2).replace('.', ',')

    return (
        //Build the card
        <>
            <div className='card'>
                <div className='count'>
                    <span><i className="gg-shopping-cart">
                        <span className='number'>{count}</span></i>
                    </span>
                </div>
                <h3>
                    {products.name}
                </h3>
                <img
                    src={products.image}
                    alt='Nome produto'
                    width={160}
                />
                <h3 >
                    R$ {priceFormated}
                </h3>
                <div>
                    <h3>Score: {props.data.score}</h3>
                    <button className='btn-card' onClick={() => {
                        addToCart(products)
                    }}>Adicionar</button>
                    <button className='btn-card' onClick={(e) => {
                        removeToCart(products)
                    }}>Remover</button>
                </div>
            </div>
        </>
    )
}

export default Card