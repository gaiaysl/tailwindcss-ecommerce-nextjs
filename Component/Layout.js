
import Footer from "../Component/Footer";
import Navbar from "../Component/Navbar"
import Head from 'next/head';
export default function Layout({children}){
    return(
        <div>
            <Head>
                <title>GAIA | Homepage</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
<Navbar  />
            {children}
<Footer/>

        </div>
    )
}