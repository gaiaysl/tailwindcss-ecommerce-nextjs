
import Link from 'next/link';
import React, { useContext } from 'react';
import { XCircleIcon } from '@heroicons/react/outline';
import Layout from '../Component/Layout';
import { Store } from '../utils/Store';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import axios from 'axios';
import { toast } from 'react-toastify';

function Cart() {
  const router = useRouter();
  const { state, dispatch } = useContext(Store);
  const {
    cart: { cartItems },
  } = state;
  const removeItemHandler = (item) => {
    
    dispatch({ type: 'CART_REMOVE_ITEM', payload: item });
  };
  const add = (item) => {
    
   
  };
  

  return (
    <Layout title="Shopping Cart">
      <h1 className="mb-4 text-xl">Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <div>
          Cart is empty. <Link href="/">Go shopping</Link>
        </div>
      ) : (
        <div className=" mx-auto max-w-4xl rounded-lg py-10 px-10 shadow-xl grid md:grid-cols-4 md:gap-5">
          <div className=" p-3 overflow-x-auto md:col-span-3">
            <table className="min-w-full ">
              <thead className="border-b">
                <tr>
                  <th className="p-5 text-left">Ürün</th>
                  <th className="p-5 text-right">Adet</th>
                  <th className="p-5 text-right">Fiyat</th>
                  <th className="p-5">Düzenle</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.id} className="border-b">
                    <td>
                      <Link href={`/product/${item.id}`}>
                        <div key={item.id} className="w-full p-5 gap-x-4  flex flex-row items-center">
                          <img
                            src={item.image}
                            alt={item.title}
                            width={50}
                            height={50}
                          ></img>
                          &nbsp;
                          {item.title}
                        </div>
                      </Link>
                    </td>
                    <td className="p-5 text-right">
                     <div className='quantity text-sm flex flex-col text-center items-center'>
                            <button
                            onClick={() => add(item)}
                            className='plus border-solid border-2 w-5 rounded-full'>+</button>
                            <p 
                            
                            className='amount'>1</p>
                            <button className='minus border-solid border-2  w-5 rounded-full'>-</button>

                     </div>
                    </td>
                    <td className="p-5 text-right">${item.price}</td>
                    <td className="p-5 text-center">
                      <button onClick={() => removeItemHandler(item)}>
                        <XCircleIcon className="h-5 w-5"></XCircleIcon>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="w-44  shadow-xl rounded-xl card p-5">
            <ul>
              <li>
              <div className='cargo '>
                  <div className='cargoamont'>
                    <p>Kargo</p>
                    <p>Bedava</p>
                    <p>12 TL</p>
                  </div>
                  <div>
                  
                    <div className="h-30   pb-3 text-xl">
                  Ödenecek Tutar ({cartItems.reduce((a, c) => a + c.quantity, 0)}) : $
                  {cartItems.reduce((a, c) => a + c.quantity * c.price, 0)}
                </div>
                  </div>
                </div>
                
              </li>
              <li>
                
                <button
                  onClick={() => router.push('login?redirect=/shipping')}
                  className="bg-green-400 text-sm text-white mt-6 w-36 rounded-lg p-2 w-full"
                >
                  Sepeti Onayla
                </button>
              </li>
            </ul>
          </div>
        </div>
      )}
    </Layout>
  );
}

export default dynamic(() => Promise.resolve(Cart), { ssr: false });
