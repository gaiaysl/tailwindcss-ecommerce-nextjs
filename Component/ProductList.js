import Link from "next/link";
import { useContext } from "react";
import { Store } from '../utils/Store';

export default function ProductList({products}) {

    const { state, dispatch } = useContext(Store);

    const addToCartHandler = () => {
        const existItem = state.cart.cartItems.find((x) => x.slug === product.id);
        const quantity = existItem ? existItem.quantity + 1 : 1;
    
        if (product < quantity) {
          alert('Sorry. Product is out of stock');
          return;
        }
    
        dispatch({ type: 'CART_ADD_ITEM', payload: { ...products, quantity } });
      };

    return (
        <div className=" ">
            <div className="max-w-2xl mx-auto py-10 sm:px-6 lg:max-w-7xl lg:px-8 ">
            

                <div className=" mt-6 grid grid-cols-1 gap-y-10 p-4 mx-auto sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {products.map((product) => (
                        <div key={product.id} className="flex flex-col items-center text-center mx-auto justify-between  p-4  h-96 w-64 shadow-xl rounded-lg   ">
                            <div className="  flex flex-col items-center   ">



                                <Link   key={product.id}
                                        href={`/product/${product.id}`} >
                                        <img
                                            src={product.image}
                                          
                                            className="w-44 h-48  object-fit  "
                                        />
                                </Link>
                                
                               
                            </div>
                            <div className=" flex flex-col text-center gap-y-3  ">
                                <h1 className="text-sm mt-6 font-bold  text-gray-900">{product.title}</h1>
                                <p className="text-sm font-medium text-gray-900">₺{product.price}</p>
                               
                                </div>
                           
                                <button 
                                onClick={addToCartHandler}
                                className=" p-2  bg-green-400 rounded-lg text-white text-sm">
                                add to cart
                                </button>
                          
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}


