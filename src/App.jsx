import './App.css'
import { ProductsLIst } from './components/ProductsLIst'
import Filters from './components/Filters'
import { FilterProvider } from './context/filters'
import Cart from './components/Cart'
import { CartProvider } from './context/cart'

function App() {
    return (
        <FilterProvider>
                <header>
                    <h1>D-ecommerce</h1>
                    <Filters />
                </header>
            <CartProvider>
                <main>
                    <ProductsLIst />
                </main>
                <Cart />
            </CartProvider>
        </FilterProvider>
    )
}

export default App
