import Register from "../Component/Register";
import Layout from "../Component/Layout";

export default function register({categories}){
    return(
        <div>
            <Layout categories={categories}>
            <Register/>
            </Layout>
        </div>
    )
}
export async function getStaticProps({}) {


//https://fakestoreapi.com/products/category/

    const data2= await fetch("https://fakestoreapi.com/products/categories")
    const categories = await data2.json()





    return {
        props: {
            categories,

        },
    }}