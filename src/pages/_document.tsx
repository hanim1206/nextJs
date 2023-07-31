import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html lang="ko">
                <Head>
                    <link rel="stylesheet" type="text/css" charSet="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" /> 
                    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
                    <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet"></link>
                    <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
        </Html>
    )
}
