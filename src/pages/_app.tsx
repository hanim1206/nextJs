import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect } from 'react';
import AOS from 'aos';
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import {Provider, useDispatch, useSelector, connect} from 'react-redux';
import counter from '../components/store/counter'
import theme from '../components/store/themeReducer'
import Theme from '../components/common/Theme'
// 인터페이스
interface I_stateProps{
  theme:string,
}
export default function App({ Component, pageProps }: AppProps) {
  
    useEffect(() => {
        AOS.init({
          startEvent: 'DOMContentLoaded', 
          initClassName: 'aos-init',
          animatedClassName: 'aos-animate'
        });
      }, [])
    return (
      <Provider store={theme}>
        <Theme>
          <Component {...pageProps} />
        </Theme>
    </Provider>
    )
}
