import { useContext, useState } from 'react'
import { CartContext } from '../context/cart'

export default function Cart() {
    const [openedCart, setOpenedCart] = useState(false)
    const { addedToCart, setAddedToCart } = useContext(CartContext)
    const deleteProduct = index => {
        setAddedToCart(addedToCart.toSpliced(index, 1))
    }
    const updateQty = (e, id) => {
        const newQty = Number(e.target.value)
        const newCart = addedToCart.map(product => {
            if (product.id == id) product.quantity = newQty
            return product
        })

        console.log(addedToCart)
        setAddedToCart([...newCart])
    }

    const showStock = product => {
        const unitsAvailable = []
        for (let i = 0; i < product.stock; i++) {
            unitsAvailable.push(
                <option key={i} value={i + 1}>
                    {i + 1}
                </option>
            )
        }
        return unitsAvailable
    }

    return (
        <>
            <button
                style={{
                    position: 'fixed',
                    top: '0',
                    right: '0',
                    margin: '10px',
                    zIndex: 1,
                }}
                onClick={() => setOpenedCart(!openedCart)}
            >
                {openedCart ? 'X' : 'Cart'}
            </button>
            <div
                style={{
                    display: openedCart ? 'block' : 'none',
                    position: 'fixed',
                    top: '0',
                    right: '0',
                    bottom: '0',
                    backgroundColor: 'black',
                    height: '100vh',
                    width: '400px',
                    padding: '0 10px',
                    margin: '0px',
                    overflow: 'auto',
                }}
            >
                <header>
                    <h2>Products added</h2>
                    <p>3</p>
                    <p>total: 1000</p>
                </header>
                <main>
                    <ul
                        style={{
                            listStyle: 'none',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '10px',
                            padding: 0,
                            margin: '20px 0',
                        }}
                    >
                        {addedToCart &&
                            addedToCart.map((product, index) => (
                                <li
                                    key={product.id}
                                    style={{
                                        display: 'flex',
                                        gap: '10px',
                                        backgroundColor: 'rgb(12 12 12)',
                                        padding: '10px',
                                        justifyContent: 'space-between',
                                    }}
                                >
                                    <img
                                        style={{ height: '140px' }}
                                        src={product.thumbnail}
                                    />
                                    <div>
                                        <h4 title="Masacra ">
                                            {product.title}
                                        </h4>
                                        <p> ${product.price}</p>
                                        <footer>
                                            <small>
                                                Qty:{' '}
                                                <select
                                                    value={product.quantity}
                                                    onChange={e =>
                                                        updateQty(e, product.id)
                                                    }
                                                    style={{ height: '20px' }}
                                                >
                                                    {showStock(product)}
                                                </select>
                                            </small>
                                        </footer>
                                    </div>
                                    <button
                                        style={{
                                            backgroundColor: 'red',
                                            height: 'fit-content',
                                            alignSelf: 'center',
                                        }}
                                        onClick={() => deleteProduct(index)}
                                    >
                                        X
                                    </button>
                                </li>
                            ))}
                    </ul>
                </main>
                <footer
                    style={{
                        display: 'flex',
                        gap: '10px',
                        justifyContent: 'center',
                        marginBottom: '20px',
                    }}
                >
                    <button style={{ backgroundColor: 'green' }}>
                        checkout
                    </button>
                    <button style={{ backgroundColor: 'red' }}>Clear</button>
                </footer>
            </div>
        </>
    )
}
