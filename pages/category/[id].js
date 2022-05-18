import Head from "next/head";
import Layout from "../../Component/Layout";
import ProductList from "../../Component/ProductList";




export default function Category({categories,categoryProduct}){

    return(
        <Layout categories={categories}>
            <Head>
                <title>GAİA|Product</title>
            </Head>
<ProductList products={categoryProduct}/>



        </Layout>
    )
}
export async function getStaticPaths() {

    const data = await fetch('https://fakestoreapi.com/products/')
    const categoryProducts = await data.json()

    return {
        paths:
            categoryProducts.map((category) =>{
                return { params: {id:`${ category.category}` } }
            }),


        fallback: false
    };


}
export async function getStaticProps({params}) {


//https://fakestoreapi.com/products/category/

    const data2= await fetch("https://fakestoreapi.com/products/categories")
    const categories = await data2.json()
    const data =  await fetch('https://fakestoreapi.com/products/category/' + params.id)
    const categoryProduct = await data.json()




    return {
        props: {

            categoryProduct,
            categories,



        },
    }
}




