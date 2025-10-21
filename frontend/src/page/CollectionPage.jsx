import React, { useEffect, useRef, useState } from 'react'
import seller1 from '../assets/images/instructor/12.jpg'
import seller2 from '../assets/images/instructor/14.jpg'
import { FaFilter } from 'react-icons/fa'
import FilterSidebar from '../components/Products/FilterSidebar'
import SortOptions from '../components/Products/SortOptions'
import ProductGrid from '../components/Products/ProductGrid'

const CollectionPage = () => {
    const [products, setProducts] = useState([])
    const sidebarRef = useRef(null)
    const [isSideBarOpen, setIsSideBarOpen] = useState(false)


    const toggleSidebar = () => {
        setIsSideBarOpen(!isSideBarOpen)
    }

    const handleClickOutside = (e) => {
        if(sidebarRef.current && !sidebarRef.current.contains(e.target)) {
            setIsSideBarOpen(false)
            
            console.log('clicked')
        }
    }
    useEffect(()=> {
        document.addEventListener('mousedown', handleClickOutside)
        // removeEventListen

        return ()=> {
        document.removeEventListener('mousedown', handleClickOutside)
        }
    },[])

    useEffect(()=> {
        setTimeout(() => {
            const fetchedProducts = [
                    {
                        _id: 1,
                        name: 'product1',
                        price: 200,
                        image: [
                            {  
                             url: 'https://picum.photos/500/500?random=1' ,
                            img: seller1,
                         }
                        ]
                    },
                    {
                        _id: 2,
                        name: 'product2',
                        price: 200,
                        image: [
                            {  
                             url: 'https://picum.photos/500/500?random=1' ,
                            img: seller2,
                         }
                        ]
                    },
                    {
                        _id: 3,
                        name: 'product3',
                        price: 200,
                        image: [
                            {  
                             url: 'https://picum.photos/500/500?random=1' ,
                            img: seller1,
                         }
                        ]
                    },
                    {
                        _id: 4,
                        name: 'product4',
                        price: 200,
                        image: [
                            {  
                             url: 'https://picum.photos/500/500?random=1' ,
                            img: seller2,
                         }
                        ]
                    },
                    {
                        _id: 5,
                        name: 'product4',
                        price: 200,
                        image: [
                            {  
                             url: 'https://picum.photos/500/500?random=1' ,
                            img: seller1,
                         }
                        ]
                    },
                    {
                        _id: 6,
                        name: 'product4',
                        price: 200,
                        image: [
                            {  
                             url: 'https://picum.photos/500/500?random=1' ,
                            img: seller2,
                         }
                        ]
                    },
                    {
                        _id: 7,
                        name: 'product4',
                        price: 200,
                        image: [
                            {  
                             url: 'https://picum.photos/500/500?random=1' ,
                            img: seller1,
                         }
                        ]
                    },
                    {
                        _id: 8,
                        name: 'product8',
                        price: 200,
                        image: [
                            {  
                             url: 'https://picum.photos/500/500?random=1' ,
                            img: seller2,
                         }
                        ]
                    },
                ]
            setProducts(fetchedProducts)
        }, 1000)

    }, [])
    
  return (
    <div className='flex flex-col lg:flex-row'>
        {/* mobile filter */}
        <button onClick={toggleSidebar}  className="lg:hidden border flex items-center justify-center p-2"> <FaFilter className='mr-r'/> Filters </button>
        <div ref={sidebarRef} className={`${isSideBarOpen ? 'translate-x-0' : '-translate-x-full '} fixed inset-y-0 left-0 bg-white overflow-y-auto transition-all duration-300 lg:static lg:translate-x-0 w-[220px]`}>
            {/* filter side bar */}
            <FilterSidebar/>
        </div>
        <div className="flex-grow p-4">
            <h2 className="text-2xl uppercase mb-4">All Collections</h2>
            {/* sort options */}
            <SortOptions/>
            {/* product grid */}
            <ProductGrid products= {products} />
        </div>
    </div>
  )
}

export default CollectionPage