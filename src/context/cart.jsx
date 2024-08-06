import { createContext, useState } from 'react'

export const CartContext = createContext()

export function CartProvider({ children }) {
    const [addedToCart, setAddedToCart] = useState([])

    return (
        <CartContext.Provider value={{ addedToCart, setAddedToCart }}>
            {children}
        </CartContext.Provider>
    )
}
