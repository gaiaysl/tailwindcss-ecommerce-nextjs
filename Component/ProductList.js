import Link from "next/link";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default function ProductList({products}) {
    return (
        <div className="bg-white">
            <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                <h2 className="text-2xl  tracking-tight  text-slate-400">New Products</h2>

                <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {products.map((product) => (
                        <div key={product.id} className="group relative">
                            <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">



                                <Link key={product.id} href="/product/[id]"  as={`/product/${product.id}`}>
                                        <img
                                            src={product.image}
                                            alt={product.title}
                                            className="w-full h-full object-center object-fit lg:w-full lg:h-full"
                                        />
                                </Link>

                            </div>
                            <div className="mt-4 flex justify-between">
                                <div>
                                    <h3 className="text-sm text-gray-700">

                                        <Link href="/product/[id]"  as = {`/product/${product.id}`}>
                                        <a href={product.id}>
                                            <span aria-hidden="true" className="absolute inset-0" />
                                            {product.title}
                                        </a>
                                        </Link>
                                    </h3>

                                    <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                                </div>
                                <p className="text-sm font-medium text-gray-900">{product.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}


