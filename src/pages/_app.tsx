import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect } from 'react';
import AOS from 'aos';
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import {Provider, useDispatch, useSelector, connect} from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../components/store/module/rootReducer'
import { composeWithDevTools } from 'redux-devtools-extension'; // 리덕스 개발자 도구

//리덕스 개발자모드 적용
const store = createStore(rootReducer, composeWithDevTools());
// console.log(store.getState().counterReducer)
export default function App({ Component, pageProps }: AppProps) {
  
    useEffect(() => {
        AOS.init({
          startEvent: 'DOMContentLoaded', 
          initClassName: 'aos-init',
          animatedClassName: 'aos-animate'
        });
      }, [])
  return (
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>

    )
}
