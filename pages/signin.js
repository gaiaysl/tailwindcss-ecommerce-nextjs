import { useState } from "react";
import Link from "next/link";
import Layout from '../Component/Layout'

export default function signin(){

  const [openTab, setOpenTab] = useState(1);

  return(

    <Layout>
            <div className="container mx-auto py-6 ">
                <div className="flex flex-col items-center justify-center max-w-7xl my-8 ">
                    <ul className="flex space-x-2">
                        <li>
                            <Link
                                href="#register"
                                onClick={() => setOpenTab(1)}
                                className="inline-block px-4 py-2 text-gray-600 bg-white rounded shadow"
                            >
                               Üye Ol
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="#login"
                                onClick={() => setOpenTab(2)}
                                className="inline-block px-4 py-2 text-gray-600 bg-white rounded shadow"
                            >
                                Giriş Yap
                            </Link>
                        </li>
                       
                    </ul>
                    <div className="p-3 mt-6 bg-white border py-4">
                        <div className={openTab === 1 ? "block" : "hidden"}>
                            {" "}
                           
  <form action="/api/register" method="post" className="flex flex-col text-sm font-semibold my-8 mx-6 p-2 w-72 gap-y-2 ">
      <label>
        E-Posta
      </label>
      <input className=" p-2 rounded-lg border-2"type='email' name='email' placeholder='Type your email'></input>
      <label>
        Şifre
      </label>
      <input className=" p-2 rounded-lg border-2" type='password' name='password' placeholder='Type your password'></input>
      <button className=" mt-5 bg-blue-500 text-white  rounded-lg p-2 mt-2 " type='submit' value='Register'>Üye Ol</button>

    </form>

                        </div>
                        <div className={openTab === 2 ? "block" : "hidden"}>
                           
  <form action="/api/login" method="post" className="flex flex-col text-sm font-semibold my-8 mx-6 p-2 w-72 gap-y-2 ">
      <label>
        E-Posta
      </label>
      <input className=" p-2 rounded-lg border-2" type='email' name='email' placeholder='Type your email'></input>
      <label>
        Şifre
      </label>
      <input className=" p-2 rounded-lg border-2" type='password' name='password' placeholder='Type your password'></input>
      <button  className="mt-4 bg-blue-500 text-white border rounded-lg p-2 mt-2 " type='submit' value='Register'>Giriş Yap</button>

    </form>

                        </div>
                        
                    </div>
                </div>
            </div>
        </Layout>
  )
}
