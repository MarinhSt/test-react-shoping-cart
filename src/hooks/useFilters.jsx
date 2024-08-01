import { useState } from "react"
import { products } from '../mocks/mocked-products.json'

export function useFilters() {
    const [filterBy, setFilterBy] = useState({
        category: 'All',
        from: 0,
        to: 9999.99,
    })

    const productsCategories = [
        ...new Set(products.map(product => product.category)),
        //todo - get this set from api
    ]

    const filterProducts = (products) => {
        return products.filter(({ category, price }) => {
            return (
                price >= filterBy.from &&
                price <= filterBy.to &&
                (filterBy.category === 'All' || category === filterBy.category)
            )
        })
    }
    
    return (
        { filterBy, setFilterBy, productsCategories, filterProducts }
    )
}