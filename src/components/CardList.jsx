import React, { useState } from 'react'
import Card from './Card'
import './cardList.css'
import datas from '../data/products.json'
import Store from './Store'


const CardList = props => {
    const [cart, setCart] = useState([])

    //Render the catalog
    return (
        <div className="main">
            <div className='products-list-container'>
                <div className='product-itens'>
                    {datas.map((products, i) => {
                        return (
                            <Card data={products}
                                key={products.id}
                                cart={cart}
                                setCart={setCart} />
                        )
                    })}
                    {/* sharing the cart */}
                    <Store cart={cart} />
                </div>
            </div>
        </div>
    )
}

export default CardList