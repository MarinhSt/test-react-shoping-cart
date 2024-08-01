import './App.css'
import { products } from './mocks/mocked-products.json'
import { ProductsLIst } from './components/ProductsLIst'
import Filters from './components/Filters'
import { useFilters } from './hooks/useFilters'

function App() {
    const { filterBy, setFilterBy, productsCategories, filterProducts } =
        useFilters()
    const filteredProducts = filterProducts(products)
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
