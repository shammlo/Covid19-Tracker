//********** IMPORTS ************* */
import '../styles/globals.css';
import '../styles/Sass/main.scss';
import Layout from '../Layout/Layout';
//******************************** */

function MyApp({ Component, pageProps }: any) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
}

export default MyApp;
