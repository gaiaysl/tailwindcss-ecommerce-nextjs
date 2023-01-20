import {StarIcon} from "@heroicons/react/solid";
import React, { useContext } from 'react'
import {Store} from '../utils/Store'


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function ProductDetail({product}) {

    const { state, dispatch } = useContext(Store);

    const addToCartHandler = () => {
      
        const existItem = state.cart.cartItems.find((x) => x.id === product.id);
        const quantity = existItem ? existItem.quantity + 1 : 1;
    
        if (product.countInStock < quantity) {
          alert('Sorry. Product is out of stock');
          return;
        }
    
        dispatch({ type: 'CART_ADD_ITEM', payload: { ...product, quantity } });
      };

    return (
        <div className=" mx-auto max-w-2xl  my-10">
            <div className="rounded-lg shadow-xl p-6 py-4 ">
                <nav aria-label="Breadcrumb  ">
                    <ol role="list" className=" mx-auto px-4 flex items-center space-x-2 sm:px-6 lg:max-w-7xl lg:px-8">

                            <li key={product.title}>
                                <div className="flex items-center">
                                    <div  className="mr-2 text-sm font-medium text-gray-900">
                                        {product.category}
                                    </div>
                                    <svg
                                        width={16}
                                        height={20}
                                        viewBox="0 0 16 20"
                                        fill="currentColor"
                                        xmlns="http://www.w3.org/2000/svg"
                                        aria-hidden="true"
                                        className="w-4 h-5 text-gray-300"
                                    >
                                        <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                                    </svg>
                                </div>
                            </li>

                        <li className="text-sm">
                            <div  aria-current="page" className="font-medium text-gray-500 hover:text-gray-600">
                                {product.title}
                            </div>
                        </li>
                    </ol>
                </nav>



                {/* Image gallery */}
                <div className="mt-6 sm:mx-auto ">
                   
                    <div className="mt-6 py-4 h-96 mx-auto flex items-center justify-center  sm:overflow-hidden ">
                        <img
                            src={product.image}
                          
                            className= " rounded-xl w-64 h-full object-fill "
                        />
                    </div>
                </div>



                {/* Reviews */}
                <div className="mt-6">
                    <h3 className="sr-only">Reviews</h3>
                    <div className="flex items-center">
                        <div className="flex items-center">

                                <StarIcon
                                    key={product.rating}
                                    className={classNames(
                                        product.rating.rate > product.rating ? 'text-gray-900' : 'text-gray-200',
                                        'h-5 w-5 flex-shrink-0'
                                    )}
                                    aria-hidden="true"
                                />

                        </div>
                        <p className="sr-only">{product.rating.rate} out of 5 stars</p>
                        <div className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                            {product.rating.count} reviews
                        </div>
                    </div>
                </div>



                {/* Product info */}
                <div className="max-w-3xl mx-auto pt-2 py-4  ">
                    <div className=" mx-6">
                        <h1 className="text-xl font-extrabold tracking-tight text-gray-900 sm:text-2xl">{product.title}</h1>
                    </div>

                   

                    <div className=" py-2 lg:pt-2  ">
                        {/* Description and details */}
                        <div className="sm:px-6 lg:max-w-7xl lg:pt-8 lg:py-6 lg:px-8 lg:grid lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8" >
                            <h3 className="sr-only">Description</h3>

                            <div className=" lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8 space-y-4 flex flex-col items-center ">
                                <p className=" text-gray-900 text-sm">{product.description}</p>
                                
                            </div>
                             {/* Options */}
                    <div className="py-4  lg:row-span-3 ">
                        <h2 className="sr-only">Product information</h2>
                       
                        <p className="text-2xl lg:text-center text-gray-900 font-semibold mb-2">{product.price}₺</p>
                        <div className="flex flex-col  items-center">
                        <button
                        onClick={addToCartHandler}
                         className="w-36  bg-green-400 p-2 rounded-lg text-white text-md">add to cart</button>
                        </div>
                    </div>
                        </div>

                        
                    </div>
                   
                </div>
            </div>
        </div>
    )

}
