import { useState } from 'react'

export default function Cart() {
    const [openedCart, setOpenedCart] = useState(false)
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
                    backgroundColor: 'black',
                    height: '100vh',
                    width: '400px',
                    padding: '10px',
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
                            margin: '40px 0',
                        }}
                    >
                        <li
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
                                src="https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png"
                            />

                            <div>
                                <h4 title="Masacra ">
                                    Essence Mascara Lash Princess{' '}
                                </h4>
                                <p> $40.99</p>
                                <footer>
                                    <small>Qty: 1 </small>
                                    <button style={{ padding: '6px' }}>
                                        +
                                    </button>
                                </footer>
                            </div>

                            <button
                                style={{
                                    backgroundColor: 'red',
                                    height: 'fit-content',
                                    alignSelf: 'center',
                                }}
                            >
                                X
                            </button>
                        </li>

                        <div
                            style={{
                                display: 'flex',
                                gap: '10px',
                                backgroundColor: 'rgb(12 12 12)',
                                justifyContent: 'space-between',
                                padding: '10px',
                            }}
                        >
                            <img
                                style={{ height: '140px' }}
                                src="https://cdn.dummyjson.com/products/images/beauty/Eyeshadow%20Palette%20with%20Mirror/thumbnail.png"
                            />
                            <div>
                                <h4>Eyeshadow Palette with Mirror</h4>
                                <p>$19.99</p>
                                <footer>
                                    <small>Qty: 1 </small>
                                    <button style={{ padding: '6px' }}>
                                        +
                                    </button>
                                </footer>
                            </div>

                            <button
                                style={{
                                    backgroundColor: 'red',
                                    height: 'fit-content',
                                    alignSelf: 'center',
                                }}
                            >
                                X
                            </button>
                        </div>
                    </ul>
                </main>
                <footer style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
                    <button style={{ backgroundColor: 'green' }}>
                        checkout
                    </button>
                    <button style={{ backgroundColor: 'red' }}>Clear</button>
                </footer>
            </div>
        </>
    )
}
