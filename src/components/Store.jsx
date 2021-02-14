import React from 'react'
import Order from './Order'

export const Store = props => {

    const cart = props.cart

    return (
        <AppContext.Provider value={props}>            
            <Order cart={cart}/>
        </AppContext.Provider>

    )
}

export default Store;
export const AppContext = React.createContext(Store)