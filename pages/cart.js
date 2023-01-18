
import Layout from '../Component/Layout'
export default function Cart(){
    return(
        <Layout >
        <div className="flex flex-col h-screen ">
            Shopping cart
            <span>Cart Boş.<a href="/" className='text-blue-500 '
            >Alışverişe Git</a></span>
        </div>
        </Layout>
    )
}