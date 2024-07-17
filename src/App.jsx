import { useState } from 'react'
import './App.css'
import { products } from './mocks/mocked-products.json'

function App() {
    const [showFilter, setShowFilter] = useState(false)
    const [filterBy, setFilterBy] = useState({
        category: 'All',
        from: 0,
        to: 9999.99,
    })
    const productsCategories = [
        ...new Set(products.map(product => product.category)),
    ]

    const filterProducts = () => {
        return products.filter(({ category, price }) => {
            return (
                price >= filterBy.from &&
                price <= filterBy.to &&
                (filterBy.category === 'All' || category === filterBy.category)
            )
        })
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
                        <>
                            <div>
                                <h2>Categories</h2>
                                <select
                                    onChange={e => {
                                        setFilterBy({
                                            ...filterBy,
                                            category: e.target.value,
                                        })
                                    }}
                                    value={filterBy}
                                >
                                    <option>All</option>
                                    {productsCategories.map(
                                        (category, index) => (
                                            <option key={index}>
                                                {category}
                                            </option>
                                        )
                                    )}
                                </select>
                            </div>
                            <div>
                                <h2>Price range</h2>
                                <label htmlFor="priceFrom">From</label>
                                <input
                                    id="priceFrom"
                                    type="number"
                                    onChange={e =>
                                        setFilterBy({
                                            ...filterBy,
                                            from: e.target.value,
                                        })
                                    }
                                    value={filterBy.from}
                                />
                                <label htmlFor="priceTo">To</label>
                                <input
                                    id="priceTo"
                                    type="number"
                                    onChange={e =>
                                        setFilterBy({
                                            ...filterBy,
                                            to: e.target.value,
                                        })
                                    }
                                    value={filterBy.to}
                                />
                            </div>
                        </>
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
