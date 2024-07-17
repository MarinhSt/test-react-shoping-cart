import { useState } from 'react'
import './App.css'
import { products } from './mocks/mocked-products.json'

function App() {
    const [showFilter, setShowFilter] = useState(false)
    const [filterBy, setFilterBy] = useState('All')
    const productsCategories = [
        ...new Set(products.map(product => product.category)),
    ]

    const filterProducts = () => {
        if (filterBy === 'All') {
            return [...products]
        } else {
            return products.filter(product => product.category === filterBy)
        }
    }
    const filteredProducts = filterProducts()
    return (
        <>
            <header>
                <h1>D-ecommerce</h1>
                <section>
                    <button onClick={() => setShowFilter(!showFilter)}>
                        Fitler by
                    </button>
                    {showFilter && (
                        <div>
                            <h2>Categories</h2>
                            <select
                                onChange={e => {
                                    setFilterBy(e.target.value)
                                }}
                                value={filterBy}
                            >
                                <option>All</option>
                                {productsCategories.map((category, index) => (
                                    <option key={index}>{category}</option>
                                ))}
                            </select>
                        </div>
                    )}
                </section>
            </header>
            <main>
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
                            <p>{product.description}</p>
                            <span>
                                <b>PRICE: $</b>
                                {product.price}
                            </span>
                        </li>
                    ))}
                </ul>
            </main>
        </>
    )
}

export default App
