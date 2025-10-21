import React, { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'



const FilterSidebar = () => {
    const[ searchParams, setSearchParams ]= useSearchParams()
    const navigate = useNavigate()
    const [filters, setFilters] = useState({
        category: '',
        gender: '',
        color: '',
        size: [],
        material: [],
        brand: [],
        minPrice: 0,
        maxPrice: 100,
    })

    const [priceRange, setPriceRange] = useState([0, 100])

    // Note to self: these should be stored in the database
    const categories = ['Top Wear', 'Bottom Wear']
    const colors = [ 'red', 'coral', 'black', 'yellow','green', 'pink', 'white','navy',  ];
    const sizes = [ 'XS', 'S', 'M', 'L', 'XL', 'XXL']
    const materials = ['cotton', 'wool', 'denim', 'polyester', 'silk', 'linen', 'viscose', 'fleece'];
    const brands = ['Moder fits', 'Urban thread', 'Street Style', 'Beach breeze', 'Fashionista', 'ChicStyle'];
    const genders = ['Men', 'Women']

    useEffect(() => {
        const params = Object.fromEntries([...searchParams])

        setFilters({
            category: params.category || "",
            gender: params.gender || "",
            color: params.color || "",
            size: params.size ? params.size.split(",") : [] ,
            material: params.material ? params.material.split(",") : [],
            brand: params.brand ? params.brand.split(",") : [],
            minPrice: params.minPrice || 0,
            maxPrice: params.maxPrice || 100,
        })

        setPriceRange([0, params.maxPrice || 100])
    }, [searchParams])


    const handleFilterChange = (e) => {
        const {name, type, checked, value} = e.target;
        let newFilters = {...filters}

        console.log({name, type, checked, value});
        
        
        if(type === 'checkbox' ) {
            if(checked) {
                newFilters[name] = [...(newFilters[name] || [] ), value ]
            }else {
                newFilters[name] = newFilters[name].filter((item) => item !== value) 
            }
        } else {
            newFilters[name] = value
        }
        setFilters(newFilters)
         updateURLParams(newFilters)
        
        
    }

    const updateURLParams = (newFilters) => {
        const params = new URLSearchParams()

        Object.keys(newFilters).forEach((key) => {
            if(Array.isArray(newFilters.key) && newFilters.key.length > 0 ) {
                params.append(key, newFilters.key.join(","))
            } else if(newFilters[key]) {
                params.append(key, newFilters[key])
            }
            setSearchParams(params)
            navigate(`?${params.toString()}`)
        })
    }

    const handlePriceRange = (e) => {
        const newPrice = e.target.value;
        setPriceRange([0, newPrice])
        const newFilters = {...filters, minPrice: 0, maxPrice: newPrice}
        setFilters(filters)
        updateURLParams(newFilters )
    }

  return (
    <div className='p-4'>
        <h3 className="text-xl font-medium text-gray-800 mb-4">Filter</h3>
        {/* category filter */}
        <div className="mb-6">
            <label  className="block text-gray-800 font-medium mb-2"> Category</label>
            {categories.map((category) => (
             <div key={category}  className="flex items-center">
                <input type="radio" name='category' value={category}  checked= {filters.category === category} onChange={handleFilterChange} className="mr-1 h-4 w-4 text-blue-500 focus:ring-blue-500 border-gray-300" />
                <span className="text-gray-700 tracking-tighter">{category}</span>
             </div>
            ))}
        </div>
        {/* gender section */}
        <div className="mb-6">
            <label  className="block text-gray-800 font-medium mb-2"> Gender</label>
            {genders.map((gender) => (
             <div key={gender}  className="flex items-center">
                <input type="radio" name='gender' value={gender}  checked= {filters.gender === gender} onChange={handleFilterChange} className="mr-1 h-4 w-4 text-blue-500 focus:ring-blue-500 border-gray-300" />
                <span className="text-gray-700 tracking-tighter">{gender}</span>
             </div>
            ))}
        </div>
        {/* color filter */}
             <div className="mb-6">
            <label  className="block text-gray-800 font-medium mb-2"> Color</label>
            <div className="flex flex-wrap gap-2">
                {colors.map((color) =>(
                    <button key={color} value={color}  
                     onClick={handleFilterChange}  style={{backgroundColor: color.toLowerCase()}} 
                     className={` w-8 h-8 rounded-full border border-gray-300 cursor-pointer transition-all hover:scale-105 ${filters.color === color ? 'ring-2 ring-blue-500' : "" }`} > </button>
                ))}
            </div>

            </div>
        {/* size filter */}
             <div className="mb-6">
            <label  className="block text-gray-800 font-medium mb-2"> Size</label>
                {sizes.map((size) =>(
              <div  key={size} className="flex items-center mb-1">
                <input type="checkbox" name='size' 
                checked={filters.size.includes(size)}
                value={size} onChange={handleFilterChange} className="mr-2 h-4 w-4 text-blue-500 focus:ring-blue-500 border-gray-300" />
                <span className="text-gray-700 tracking-tighter">{size}</span>
                  
            </div>
                ))}
            </div>
        {/* material filter */}
             <div className="mb-6">
            <label  className="block text-gray-800 font-medium mb-2"> Material</label>
                {materials.map((material) =>(
              <div  key={material} className="flex items-center mb-1">
                      <input type="checkbox" name= 'material' 
                      checked={filters.material.includes(material)} value={material} onChange={handleFilterChange} className="mr-2 h-4 w-4 text-blue-500 focus:ring-blue-500 border-gray-300" />
                     <span className="text-gray-700 tracking-tighter">{material}</span>
                  
            </div>
                ))}
            </div>
        {/* brand filter */}
             <div className="mb-6">
            <label  className="block text-gray-800 font-medium mb-2"> Brand</label>
                {brands.map((brand) =>(
               <div  key={brand} className="flex items-center mb-1">
                 <input type="checkbox" name='brand'
                 checked={filters.brand.includes(brand)}
                 value={brand} onChange={handleFilterChange} className="mr-2 h-4 w-4 text-blue-500 focus:ring-blue-500 border-gray-300" />
                 <span className="text-gray-700 tracking-tighter">{brand}</span>
                  
            </div>
                ))}
            </div>
             {/* price range */}
             <div className="mb-6">
            <label  className="block text-gray-800 font-medium mb-2"> Color</label>
            <input type="range" name="price-range"   value={priceRange[1]} onChange={handlePriceRange} min={0} max={[100]} className="w-full h-2 background-gray-300 rounded-lg appearance-none cursor-pointer" /> 
            <div className="flex justify-between text-gray-600 mt-2">
                <span>$0</span>
                <span>${priceRange[1]}</span>
            </div>
             </div>   
    </div>
  )
}

export default FilterSidebar