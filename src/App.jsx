import './App.css'
import { products } from './mocks/mocked-products.json'

function App() {
    return (
        <>
            <header>
                <h1>D-ecommerce</h1>
            </header>
            <main>
                <ul
                    
                >
                    {products.map(product => (
                        <li
                            
                            key={product.id}
                        >
                            <img
                                src={product.thumbnail}
                            />
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
