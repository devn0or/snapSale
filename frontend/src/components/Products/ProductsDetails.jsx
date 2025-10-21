import { useEffect, useState } from 'react'
import seller1 from '../../assets/images/instructor/12.jpg'
import seller2 from '../../assets/images/instructor/14.jpg'
import ProductGrid from './ProductGrid'

const selectedProducts =  {
        name: 'College Jacket',
        price: 200,
        originalPrice: 170,
        desc: 'Your favourite college jacket paerfect for every occasion',
        brand: 'Fashion brand',
        material: 'leather',
        sizes: ['S', 'M', 'L', 'XL' ],
        colors: ['red', 'black'],
        images: [
            {
                url: 'https://picum.photos/500/500?random=1' ,
                img: seller1,
                altText: 'Jacket'
            },
            {
                url: 'https://picum.photos/500/500?random=3',
                img: seller2,
                altText: 'Jacket'
            },
        ]

    }

    const similarProducts = [
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
                img: seller1,
             }
            ]
        },
    ]

const ProductsDetails = () => {
    const [mainImage, setMainImage ] =useState()
    const [selectedColor, setSelectedColor] = useState("")
    const [selectedSize, setSelectedSize ] = useState("")
    const [quantity, setQuantity] =useState(1)


    const handleQuantityChange = (action) => {
        if(action === "plus" ) setQuantity((prev)=> prev + 1 )

        if(action === "minus" && quantity > 1 ) setQuantity((prev) => prev - 1) 
    }

    useEffect(()=> {
   if(selectedProducts?.images?.length > 0) {
    setMainImage(selectedProducts.images[0].img)
   }
    },[selectedProducts])
    
  return (
    <div className='p-6'>
        <div className="max-w-6xl mx-auto bg-white p-8 rounded-lg ">
            <div className="flex flex-col md:flex-row">
                {/* left thumbnails */}
                <div className="hidden md:flex flex-col space-y-4 mr-6">
                  {selectedProducts.images.map((image, index) => (
                    <div key={index} >
                       <img src={image.img}  className={`w-20 h-20 object-cover rounded-lg cursor-pointer ${mainImage == image.img ? " border-black": "  border-gray-600"} `}  onClick={()=> setMainImage(image.img)} />
                   </div>
                  ))}
                </div>
                <div className="md:w-1/2">
                <div className="mb-4">
                    <img src={mainImage }  className='w-full  object-cover rounded-lg h-auto ' />
                </div>
                </div>

                {/* {/* /* mobi thumbnail */}
                 <div className="md:hidden flex space-x-4 mb-4 overflw-x-contain " >
                   {selectedProducts.images.map((image, index) => (
                    <div key={index} >
                     <img src={image.img}  className={`w-20 h-20 object-cover rounded-lg cursor-pointer ${mainImage == image.img ? " border-black": "  border-gray-600"} `}  onClick={()=> setMainImage(image.img)} />
                    </div>
                  ))}
                </div>

                {/* right side */}
                <div className="md:1/2 md:ml-10">
                <h2 className="text-2xl md:text-3xl font-semibold mb-2">
                    {selectedProducts.name}
                </h2>
                <p className="text-lg text-gray-600 line-through mb-1">
                    {selectedProducts.originalPrice && `${ selectedProducts.originalPrice}`}
                </p>
                <p className="text-lg text-gray-500 mb-2">
                    {selectedProducts.price}
                </p>
                <p className=" text-gray-500 mb-2">
                    {selectedProducts.desc}
                </p>

                <div className="mb-4">
                    <p className="text-gray-600">Color: </p>
                    <div className="flex gap-2 mt-2">
                        {selectedProducts.colors.map((color)=>(
                            <button className={`h-8 w-8 rounded-lg border ${selectedColor === color ? 'border-4 border-black' : 'border border-gray-600'}`}  onClick= {() => setSelectedColor(color) }  key = {color} style={{backgroundColor: color.toLocaleLowerCase(),filter: 'brightness(0.5)'}} />

                        ))}
                    </div>
                </div>

                <div className="mb-4">
                    <p className="text-gray-600">Sizes: </p>
                    <div className="flex gap-2 mt-2">
                        {selectedProducts.sizes.map((size)=>(
                            <button key={size} className={`h-8 w-8 rounded-lg border ${selectedSize === size  ? 'text-white bg-black' : ' '}`}  onClick= {() => setSelectedSize(size) }  >{size} </button>

                        ))}
                    </div>
                </div>
                <div className="my-4">
                    <p className="text-gray-600">Quantity: </p>
                    <div className="flex items-center space-x-4 mt-2">
                        <button className="px-2 py-1 rounded-lg bg-gray-200 text-lg" onClick={() => handleQuantityChange("minus")} >
                            -
                        </button>
                        <span className="text-lg">{quantity}   </span>
                        <button className="px-2 py-1 rounded-lg bg-gray-200 text-lg"onClick={() => handleQuantityChange("plus")} >
                            +
                        </button>
                    </div>

                </div>

                <button className="px-6 py-2 rounded w-full bg-black text-white">
                    ADD TO CART
                </button>

                 <div className="mt-10 text-gray-700">
                    <h3 className="text-xl text-gray-600 mb-4">Characteristics </h3>
                    <table className="w-full text-left text-sm text-gray-600">
                        <tbody>
                            <tr>
                                <td className="py-1">Brand  </td>
                                <td className="py-1">{selectedProducts.brand} </td>
                            </tr>
                            <tr>
                                <td className="py-1">Material </td>
                                <td className="py-1">{selectedProducts.material} </td>
                            </tr>
                        </tbody>
                    </table>
                 </div>
                </div>

                </div>

                {/* may also like */}
                <div className="mt-20">
                    <h2 className="text-2xl text-center mb-4"> You May ALso Like</h2>
                    <ProductGrid products = { similarProducts}/>
                </div>
            </div>
        </div>

  )
}

export default ProductsDetails