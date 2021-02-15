import React, { useReducer } from 'react'
import './main.css'
import CardList from './CardList'

import datas from '../data/products.json'

//Order list by filters
const orderByPrice = function () {
    datas.sort(function (a, b) {
        if (a.price < b.price) return -1
        if (a.price > b.price) return 1
        return 0
    })
}

const orderByScore = function () {
    datas.sort(function (a, b) {
        if (a.score < b.score) return -1
        if (a.score > b.score) return 1
        return 0
    })
}

const orderByName = function () {
    datas.sort(function (a, b) {
        if (a.name < b.name) return -1
        if (a.name > b.name) return 1
        return 0
    })
}

// choice which filter
function reducer(state, action) {
    switch (action.type) {
        case 'price':
            return orderByPrice
        case 'score':
            return orderByScore
        case 'name':
            return orderByName
        default:
            return state
    }
}

const Main = props => {
    // event to change the state and reorganize the catalog by the filter
    const [, exec] = useReducer(reducer, [])

    return (
        <div className="main">
            
            <div className="filterButtons">
            <h3>Filtrar por:</h3>
                <p>
                    <button className='btn' onClick={function () {
                        orderByPrice()
                        exec({ type: 'price' })
                    }}>Preço</button>
                </p>

                <p>
                    <button className='btn' onClick={function () {
                        orderByScore()
                        exec({ type: 'score' })
                    }}>Score</button>
                </p>

                <p>
                    <button className='btn' onClick={function () {
                        orderByName()
                        exec({ type: 'name' })
                    }}>Name</button>
                </p>
            </div>

            {/* Get the datas and pass to render */}
            <CardList data={datas} />

        </div>
    )
}

export default Main

