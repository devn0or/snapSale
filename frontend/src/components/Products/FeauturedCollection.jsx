import React from 'react'
import { Link } from 'react-router-dom'
import feautured from '../../assets/images/course/04.jpg'
const FeauturedCollection = () => {
  return (
    <section className="py-6 px-4 mt-4">
        <div className="container mx-auto flex flex-col-reverse md:flex-row items-center bg-green-50 rounded-3xl">
            {/* left */}
            <div className="lg:w-1/2 p-8 text-center lg:text-left" >
            <h2 className="text-gray-600 text-lg font-medium mb-2">Comfort And  Style</h2>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Apparel Made For Everyone.</h2>
            <p className="text-gray-600 text-lg mb-4"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati repudiandae architecto possimus esse optio ex necessitatibus odio sint exercitationem inventore. </p>
            <Link to ='collections/all' className='bg-black text-white text-lg px-6 py-3 rounded-lg hover:bg-gray-800' > Shop now</Link>
            </div>

            {/* right */}
            <div className="lg:w-1/2">
            <img src={feautured} alt="" className='w-full h-full object-cover lg:rounded-tr-3xl lg:rounded-br-3xl '/>
            
            </div>
        </div>
    </section>
  )
}

export default FeauturedCollection