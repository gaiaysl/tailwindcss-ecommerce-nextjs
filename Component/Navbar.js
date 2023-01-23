import Link from 'next/link'
import { useRouter } from 'next/router';
import { SearchIcon } from '@heroicons/react/outline';
import { useSession } from 'next-auth/react';
import { Store } from '../utils/Store';
import { ToastContainer } from 'react-toastify';
import React, { useContext, useEffect, useState } from 'react';

export default function Navbar(){

  const { state } = useContext(Store);
  const { cart } = state;
  const { status, data: session } = useSession();
    const [query, setQuery] = useState('');
    const router = useRouter();
  const submitHandler = (e) => {
    e.preventDefault();
    router.push(`/search?query=${query}`);
  };


    return(
        <div className='flex flex-row justify-between shadow-md px-4 my-4 h-12'>
            <div className='font-bold text-2xl '>
            <ToastContainer position="bottom-center" limit={1} />
                <Link href="/">GAIA</Link>
                </div>
                <form
              onSubmit={submitHandler}
              className="mx-auto mb-4 hidden w-full h-8 justify-center md:flex"
            >

      
              <input
                onChange={(e) => setQuery(e.target.value)}
                type="text"
                className="rounded-tr-none rounded-br-none rounded-lg border-2 p-1  text-sm   focus:ring-0"
                placeholder="Search products"
              />
              <button
                className=" rounded rounded-tl-none rounded-bl-none bg-green-400 p-1 text-sm dark:text-black"
                type="submit"
                id="button-addon2"
              >
                <SearchIcon className="h-5 w-5"></SearchIcon>
              </button>
            </form>
            <div className='mx-2 flex flex-row gap-x-2 '>
                <Link  href="/cart">Cart
                {cart.cartItems.length > 0 && (
                    <span className="ml-1 rounded-full bg-red-600 px-2 py-1 text-xs font-bold text-white">
                      {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                    </span>
                  )}
                </Link>
                {status === 'loading' ? (
                'Loading'
              ) : session?.user ? (
                session.user.name
              ) : (
                <Link href="/login">
                  <span className="p-2">Login</span>
                </Link>
              )}
                
                
            </div>
        </div>
    )
}