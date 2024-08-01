import { createContext, useState } from 'react'

export const FilterContext = createContext()

export function FilterProvider({ children }) {
    const [filterBy, setFilterBy] = useState({
        category: 'All',
        from: 0,
        to: 9999.99,
    })
    return (
        <FilterContext.Provider value={{filterBy, setFilterBy}}>
            {children}
        </FilterContext.Provider>
    )
}
