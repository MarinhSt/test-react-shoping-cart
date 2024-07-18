import { useState } from 'react'

export default function Filters({ productsCategories, filterBy, setFilterBy }) {
    const [showFilter, setShowFilter] = useState(false)

    return (
        <section style={{ marginBottom: '40px' }}>
            <button onClick={() => setShowFilter(!showFilter)}>
                Fitler by
            </button>
            {showFilter && (
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: '30px',
                    }}
                >
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
                            {productsCategories.map((category, index) => (
                                <option key={index}>{category}</option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <h2>Price range</h2>
                        <div style={{ display: 'flex', gap: '10px' }}>
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
                                style={{ width: '100px' }}
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
                                style={{ width: '100px' }}
                            />
                        </div>
                    </div>
                </div>
            )}
        </section>
    )
}
