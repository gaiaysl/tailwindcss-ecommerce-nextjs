import styles from '../styles/globals.scss';
import {StoreProvider} from '../utils/Store'
function MyApp({ Component, pageProps}) {
    return(

        <StoreProvider>
            <Component {...pageProps} />
            
            </StoreProvider> )

}

export default MyApp