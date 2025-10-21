import React, { useEffect, useRef, useState } from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import img from '../../assets/images/categoryTab/07.jpg'
const NewArrivals = () => {
    const newArrivals = [
        {
            _id: 1,
            name: 'stylish Jacket',
            price: 156,
            image:{
                url: "https://picsum.photos/500/500?random=1",
                altText: 'stylish Jacket'
            }
        },
        {
            _id: 2,
            name: 'stylish Jacket',
            price: 156,
            image:{
                url: 'https://picsum.photos/500/500?random=2',
                altText: 'stylish Jacket'
            }
        },
        {
            _id: 3,
            name: 'stylish Jacket',
            price: 156,
            image:{
                url: "https://picsum.photos/500/500?random=3",
                altText: 'stylish Jacket'
            }
        },
        {
            _id: 4,
            name: 'stylish Jacket',
            price: 156,
            image:{
                url: "https://picsum.photos/500/500?random=4",
                altText: 'stylish Jacket'
            }
        },
        {
            _id: 5,
            name: 'stylish Jacket',
            price: 156,
            image:{
                url: "https://picsum.photos/500/500?random=24",
                altText: 'stylish Jacket'
            }
        },
        {
            _id: 6,
            name: 'stylish Jacket',
            price: 156,
            image:{
                url: "https://picsum.photos/500/500?random=14",
                altText: 'stylish Jacket'
            }
        },
        {
            _id: 7,
            name: 'stylish Jacket',
            price: 156,
            image:{
                url: "https://picsum.photos/500/500?random=7",
                altText: 'stylish Jacket'
            }
        },
        {
            _id: 8,
            name: 'stylish Jacket',
            price: 156,
            image:{
                url: "https://picsum.photos/500/500?random=8",
                altText: 'stylish Jacket'
            }
        },
    ]

    const scrollRef = useRef(null)
    const [isDragging, setIsDragging] = useState(false)
    const [startX, setStartX]= useState(0)
    const [scrollLeft, setScrollLeft] = useState(false)
    const [canScrollLeft, setCanScrollLeft] = useState(true)
    const [canScrollRIght, setCanScrollRIght] = useState(false)



    const scroll = (direction) => {
        const scrollAmount = direction === "left" ? -300 : 300 ;
        scrollRef.current.scrollBy({left : scrollAmount, behaviour : "smooth"}) 
    }


    const updateScrollButtons = () => {
        const container = scrollRef.current;

        if(container) {
            const leftScroll = container.scrollLeft
            const rightScrollable = container.scrollRight > leftScroll + container.clientWidth;

            setCanScrollLeft(leftScroll > 0)
            setCanScrollRIght(rightScrollable)

        }
        // console.log({
        //     scrollLeft: container.scrollLeft,
        //     clientWidth: container.clientWidth,
        //     containerScrollWidth: container.scrollWidth
        // });
        
    }
    useEffect(()=> {
        const container = scrollRef.current;
        if(container){
            container.addEventListener('scroll', updateScrollButtons)
        }
        updateScrollButtons()
        return ()=> container.removeEventListener('scroll',updateScrollButtons )
    }, [])
  return (
   <section className='container mx-auto text-center mb-10 relative py-16 px-4'>
    <h2 className="text-3xl font-bold mb-3">Explore New Arrivals</h2>
    <p className="text-lg text-gray-600 mb-8">Discover the latest styles off the runway, freshly added to keep your wardrobe on the cutting edge of fashion </p>
    <div className="absolute top-[30px] right-0 flex space-x-2 z-10">
        <button onClick={()=> scroll('left')}  disabled={!canScrollLeft} className={` p-2 hover:scale-105 transition-all rounded border ${canScrollLeft ? 'cursor-pointer ': "text-gray-400 bg-gray-200 cursor-not-allowed"}`}> <FaArrowLeft/> </button>
        <button onClick={()=> scroll('right')}   className={` p-2 hover:scale-105 transition-all rounded border ${canScrollRIght ? 'bg-white text-black cursor-pointer ': "" }`}> <FaArrowRight/> </button>
    </div>

    <div ref={scrollRef} className="relative overflow-x-scroll flex container mx-auto space-x-6">
        {newArrivals.map((product) => (
            <div key={product._id} className='min-w-[100%] sm:min-w-[50%] lg:min-w-[30%] relative'>
            <img src={product.image[0]?.url || img} alt={product.image[0]?.altText || product.name} className='w-full h-[500px] object-cover rounded-lg' />
            <div className="absolute bottom-0 left-0 text-white p-4 rounded-b-lg opacity-60 backdrop-blur-md">
                <Link to= { `product/${product._id}`} className='block'>
                <h4 className="font-medium">{product.name}</h4>
                <p className="mt-1">${product.price}</p>
                </Link>
            </div>
            </div>
        ))}
    </div>
   </section>
  )
}

export default NewArrivals