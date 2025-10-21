import { Link } from 'react-router-dom'
import menCollection from '../../assets/images/about/01.jpg'
import womenCollection from '../../assets/images/about/01.png'


const GenderCollection = () => {
  return (
    <section className='py-16'>
        <div className="container mx-auto flex flex-col md:flex-row gap-8">
            <div className="relative flex-1">
                <img src={womenCollection} alt="" />
            <div className="absolute bottom-8 left-8 bg-white opacity-80 p-4">
                <h2 className="text-2xl font-bold mb-3">Women's Collection</h2>
                <Link to= '/collections/all?gender=women' className='text-gray-900 underline'>See more</Link> 
            </div>
            </div>

            <div className="relative flex-1">
                <img src={menCollection} alt="" className='w-full h-[700px] object-cover'/>
            <div className="absolute bottom-8 left-8 bg-white opacity-80 p-4">
                <h2 className="text-2xl font-bold mb-3">Men's Collection</h2>
                <Link to= '/collections/all?gender=men' className='text-gray-900 underline'>See more</Link> 
            </div>
            </div>
        </div>

    </section>
  )
}

export default GenderCollection