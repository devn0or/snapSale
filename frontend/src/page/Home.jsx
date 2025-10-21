import React from 'react'
import Hero from '../components/Layout/Hero'
import GenderCollection from '../components/Products/GenderCollection'
import NewArrivals from '../components/Products/NewArrivals'
import ProductsDetails from '../components/Products/ProductsDetails'
import ProductGrid from '../components/Products/ProductGrid'
import seller1 from '../assets/images/instructor/12.jpg'
import seller2 from '../assets/images/instructor/14.jpg'
import FeauturedCollection from '../components/Products/FeauturedCollection'
import FeauturesSection from '../components/Products/FeauturesSection'



const placeHolderProducts = [
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



const Home = () => {
  return (
    <div>
        <Hero/>
        <GenderCollection/>
        <NewArrivals/>

        <h2 className="text-3xl font-bold text-center mb-4">Best Seller</h2>
        <ProductsDetails/>

        <div className="container mx-auto">
          <h2 className="text-3xl text-center font-bold mb-4">Top Wears For Women</h2>
          <ProductGrid products= {placeHolderProducts}/>
        </div>

        <FeauturedCollection/>
        <FeauturesSection />
    </div>
  )
}

export default Home