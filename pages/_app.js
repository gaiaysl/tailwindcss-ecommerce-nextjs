import styles from '../styles/globals.scss';
import { SessionProvider } from 'next-auth/react';
import {StoreProvider} from '../utils/Store'
function MyApp({ Component, pageProps: { session, ...pageProps }}) {
    return(
        <SessionProvider session={session}>
        <StoreProvider>
          <Component {...pageProps} />
        </StoreProvider>
      </SessionProvider>)

}

export default MyApp