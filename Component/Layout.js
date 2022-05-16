
import Footer from "../Component/Footer";
import Navbar from "../Component/Navbar"
export default function Layout({children,categories}){
    return(
        <div>
<Navbar categories={categories} />
            {children}
<Footer/>

        </div>
    )
}