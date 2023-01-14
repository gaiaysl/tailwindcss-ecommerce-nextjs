import {StarIcon} from "@heroicons/react/solid";
import Link from "next/link";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function ProductDetail({product}) {

    return (
        <div className=" mx-auto flex flex-col items-center justify-center ">
            <div className="pt-6  ">
                <nav aria-label="Breadcrumb">
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
                <div className="mt-6 mx-auto ">
                   
                    <div className="aspect-w-4 aspect-h-5 sm:rounded-lg sm:overflow-hidden lg:aspect-w-3 lg:aspect-h-4">
                        <img
                            src={product.image}
                            alt={product.title}
                            className="mx-auto w-96 h-full object-center object-cover"
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
                <div className="max-w-2xl mx-auto pt-10 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:pt-16 lg:pb-24 lg:px-8 lg:grid lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8">
                    <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                        <h1 className="text-xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">{product.title}</h1>
                    </div>

                    {/* Options */}
                    <div className="mt-4 lg:mt-0 lg:row-span-3">
                        <h2 className="sr-only">Product information</h2>
                        <p className="text-3xl text-gray-900">{product.price}</p>
                    </div>

                    <div className="py-10 lg:pt-6 lg:pb-16 lg:col-start-1 lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                        {/* Description and details */}
                        <div>
                            <h3 className="sr-only">Description</h3>

                            <div className="space-y-6">
                                <p className="text-base text-gray-900">{product.description}</p>
                            </div>
                        </div>

                        <div className="mt-10">
                            <h2 className="text-sm font-medium text-gray-900">Details</h2>

                            <div className="mt-4 space-y-6">
                                <p className="text-sm text-gray-600">{product.title}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}
