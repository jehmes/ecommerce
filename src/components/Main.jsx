import React from 'react'
import './main.css'
import CardList from './CardList'


import datas from '../data/products.json'

const orderByPrice = function () {
    datas.sort(function (a, b) {
        if (a.price < b.price) return -1
        if (a.price > b.price) return 1
        return 0
    })
}

const Main = props => {

    return (
        <div className="main">
            <button onClick={() => orderByPrice()}>Preço</button>
            <CardList data={datas} />
            {/* <Order cart={Store}/> */}
        </div>

    )
}

export default Main