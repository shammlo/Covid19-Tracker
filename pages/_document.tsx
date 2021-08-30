import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';

class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps, shouldShow: true };
    }

    render() {
        return (
            <Html lang="en" dir="ltr">
                <Head>
                    {/* <meta name="viewport" content="width=device-width,initial-scale=1" /> */}
                    <link rel="shortcut icon" href="images/research.png" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
