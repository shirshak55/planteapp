import Document, { Html, Head, Main, NextScript } from "next/document"

class MyDocument extends Document {
    static async getInitialProps(ctx: any) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html className="font-sans">
                <Head>
                    <link
                        href="https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;900&display=swap"
                        rel="stylesheet"
                    />
                </Head>
                <body className="leading-normal tracking-normal bg-gray-200">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument
