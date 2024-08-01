import { useContext } from "react"
import { products } from '../mocks/mocked-products.json'
import { FilterContext } from "../context/filters"

export function useFilters() {
    const {filterBy, setFilterBy} = useContext(FilterContext)

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