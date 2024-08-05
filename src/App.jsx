import './App.css'
import { ProductsLIst } from './components/ProductsLIst'
import Filters from './components/Filters'
import { FilterProvider } from './context/filters'
import Cart from './components/Cart'

function App() {
    return (
        <FilterProvider>
            <header>
                <h1>D-ecommerce</h1>
                <Filters />
            </header>
            <main>
                <ProductsLIst />
            </main>
            <Cart />
        </FilterProvider>
    )
}

export default App
