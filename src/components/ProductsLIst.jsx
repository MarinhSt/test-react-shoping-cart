export function ProductsLIst({ filteredProducts = [] }) {
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
                    <p>{product.description}</p>
                    <span>
                        <b>PRICE: $</b>
                        {product.price}
                    </span>
                </li>
            ))}
        </ul>
    )
}
