import { useContext } from 'react'
import { useFilters } from '../hooks/useFilters'
import { products } from '../mocks/mocked-products.json'
import { CartContext } from '../context/cart'
export function ProductsLIst() {
    const { filterProducts } = useFilters()
    const filteredProducts = filterProducts(products)
    const { addedToCart, setAddedToCart } = useContext(CartContext)
    const addToCart = product => {
        const { id, thumbnail, title, price } = product
        const newProduct = { id, thumbnail, title, price, quantity: 1 }
        if (!addedToCart) {
            setAddedToCart([...newProduct])
        } else {
            setAddedToCart([...addedToCart, newProduct])
        }
    }
    return (
        <ul
            style={{
                listStyle: 'none',
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: '20px 10px',
            }}
        >
            {filteredProducts.map(product => (
                <li
                    key={product.id}
                    style={{
                        width: '200px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        boxShadow: '#6596f1a3 0px 0px 12px 0px',
                    }}
                >
                    <img src={product.thumbnail} />
                    <h3>{product.title}</h3>
                    <span>
                        <b>PRICE: $</b>
                        {product.price}
                    </span>
                    <button
                        style={{
                            width: 'fit-content',
                            alignSelf: 'center',
                            margin: '10px',
                        }}
                        onClick={() => addToCart(product)}
                    >
                        add to cart
                    </button>
                </li>
            ))}
        </ul>
    )
}
