import Layout from "../../Component/Layout";
import Head from "next/head"
import ProductDetail from "../../Component/ProductDetail";
import ProductList from "../../Component/ProductList";





export default function ProductsDetail({product, categories}){

    return(
        <Layout categories={categories}>
            <Head>
                <title>GAIA|Product</title>
            </Head>
           <ProductDetail product={product} />
      


        </Layout>
    )
}
export async function getStaticPaths() {

    const res = await fetch ('https://fakestoreapi.com/products')
    const products = await res.json()




    return {
        paths:
            products.map((product) =>{
                return { params: {id:`${ product.id}` } }
            }),




        fallback: false
    };


}
export async function getStaticProps({params}) {


//https://fakestoreapi.com/products/category/

    const data =  await fetch('https://fakestoreapi.com/products/' + params.id)
    const product = await data.json()

    const data2= await fetch("https://fakestoreapi.com/products/categories")
    const categories = await data2.json()






    return {
        props: {
            product,
            categories,



        },
    }
}