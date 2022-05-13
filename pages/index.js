
import ProductList from "../Component/ProductList";
import Head from 'next/head';
import styles from '../styles/Home.module.scss';
import Layout from "../Component/Layout";



export default function Home({categories,products}){

    return(
<Layout categories={categories}>

        <div className={styles.content}>
            <ProductList products={products}/>
            <Head>
                <title>GAIA | Homepage</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>



        </div>
</Layout>
    )
}

export async function getStaticProps() {

    const res = await fetch('https://fakestoreapi.com/products/categories')
    const categories = await res.json()

    const res1 = await fetch ('https://fakestoreapi.com/products')
    const products = await res1.json()

    return {
        props: {
            categories,
            products,

        },
    }
}









