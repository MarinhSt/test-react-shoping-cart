import { createContext, useState } from 'react'

export const CartContext = createContext()

export function CartProvider({ children }) {
    const [addedToCart, setAddedToCart] = useState([
        {
            id: 1,
            price: 9.99,
            quantity: 1,
            thumbnail:
                'https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png',
            title: 'Essence Mascara Lash Princess',
        },
        {
            id: 2,
            price: 19.99,
            quantity: 1,
            thumbnail:
                'https://cdn.dummyjson.com/products/images/beauty/Eyeshadow%20Palette%20with%20Mirror/thumbnail.png',
            title: 'Eyeshadow Palette with Mirror',
        },
        {
            id: 3,
            price: 14.99,
            quantity: 1,
            thumbnail:
                'https://cdn.dummyjson.com/products/images/beauty/Powder%20Canister/thumbnail.png',
            title: 'Powder Canister',
        },
    ])

    return (
        <CartContext.Provider value={{ addedToCart, setAddedToCart }}>
            {children}
        </CartContext.Provider>
    )
}
