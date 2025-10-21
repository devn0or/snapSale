import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom'

const SortOptions = () => {
  const [searchParams, setSearchParams] = useSearchParams()

  const handleSortChange = (e) => {
    const sortBy = e.target.value
    searchParams.set("sortBy", sortBy)
    setSearchParams(searchParams)
  }
  return (
    <div className='mb-4 flex items-center justify-end'>
      <select id="sort" className="border rounded-md p-2 focus:outline-none" value={searchParams.get('sortBy') || ''} onChange={handleSortChange}>
        <option value="">Default</option>
        <option value="priceAsc">Price:  High to Low</option>
        <option value="priceDesc">Price: Low to Hight </option>
        <option value="popularity">Popularity</option>
      </select>
    </div>
  )
}

export default SortOptions