import { useState } from 'react'
import './App.css'
import { products } from './mocks/mocked-products.json'
import { ProductsLIst } from './components/ProductsLIst'
import Filters from './components/Filters'

function App() {
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
                <Filters
                    productsCategories={productsCategories}
                    filterBy={filterBy}
                    setFilterBy={setFilterBy}
                />
            </header>
            <main>
                <ProductsLIst filteredProducts={filteredProducts} />
            </main>
        </>
    )
}

export default App
