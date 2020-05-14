import React from 'react'
import Document, {
    Html, Head, Main, NextScript
} from 'next/document'

class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <title>Naveed Ziarab | Software Engineer</title>
                    <meta name="description" content="Software engineer based in Birmingham, UK. ReactJS, React Native, Next.js, Tailwind CSS and Laravel PHP" />
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />

                    <meta property="og:locale" content="en_GB" />
                    <meta property="og:type" content="website" />
                    <meta property="og:title" content="Naveed Ziarab - Software engineer" />
                    <meta property="og:description" content="Software engineer based in Birmingham, UK. ReactJS, React Native, Next.js, Tailwind CSS and Laravel PHP" />
                    <meta property="og:url" content="https://naveedziarab.co.uk" />
                    <meta property="og:site_name" content="Naveed Ziarab" />
                    <meta name="twitter:card" content="summary" />
                    <meta name="twitter:description" content="Software engineer based in Birmingham, UK. ReactJS, React Native, Next.js, Tailwind CSS and Laravel PHP" />
                    <meta name="twitter:title" content="Naveed Ziarab - Software engineer" />
                    <meta name="twitter:domain" content="Naveed Ziarab" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument
