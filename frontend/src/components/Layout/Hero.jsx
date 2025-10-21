import { Link } from 'react-router-dom'
import banner from '../../assets/images/bg-img/05.jpg'
const Hero = () => {
  return (
    <div className='relative'>
        <img src={banner} className="w-full h-[400px] md:h-[600px] lg:h-[720px] object-cover" />
        <div className="absolute inset-0 bg-black opacity-60 flex items-center justify-center ">
            <div className="text-center p-6 text-white z-10">
                <h1 className='text-4xl   md:text-9xl font-bold tracking-tighter uppercase mb-4'> Vacation <br /> Ready</h1>
                <p className="text-sm  tracking-tighter mb-6 md:text-lg"> Explore our vacation-ready outfits with fast world wide shipping </p>
                <Link to='#' className='bg-white text-gray-950 px-6 py-2 rounded-sm text-lg'> Shop now</Link>
            </div>
        </div>
    </div>
  )
}

export default Hero