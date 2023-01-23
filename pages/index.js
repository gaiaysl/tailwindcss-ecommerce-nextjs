import ProductList from "../Component/ProductList";
import Layout from "../Component/Layout";


export default function Home({products}){
    return(

        
<Layout >

        <div>
            <ProductList products={products}/>
            
        </div>

</Layout>

    )
}

export async function getStaticProps() {


    const res1 = await fetch ('https://fakestoreapi.com/products')
    const products = await res1.json()

    return {
        props: {
           
            products,

        },
    }
}










