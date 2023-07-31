import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect } from 'react';
import AOS from 'aos';
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'

export default function App({ Component, pageProps }: AppProps) {
    useEffect(() => {
        AOS.init({
          startEvent: 'DOMContentLoaded', 
          initClassName: 'aos-init',
          animatedClassName: 'aos-animate'
        });
      }, [])
    return (
        <div>
            <Component {...pageProps} />
        </div>
    )
}
