import React, { useState } from 'react'
import Card from './Card'
import './cardList.css'
import datas from '../data/products.json'
import Store from './Store'


const CardList = props => {
    const [cart, setCart] = useState([])
   
    return (
        <div className="main">
            <div className='products-list-container'>
                <div className='product-itens'>
                    {datas.map((products, i) => {
                        return (
                            <Card data={products} image='' key={products.id} cart={cart} setCart={setCart} />
                        )
                    })}
                    <Store cart={cart} />
                </div>
            </div>

        </div>
    )
}

export default CardList