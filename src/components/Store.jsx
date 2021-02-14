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
// sharing the cart
export default Store;
export const AppContext = React.createContext(Store)