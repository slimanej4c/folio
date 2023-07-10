import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux';
import Head from 'next/head'
import '../styles/Layout.css'
import '../styles/home/section1.css'
import '../styles/home/home.css'
import '../styles/competence/competence.css'
import '../styles/project/project.css'
import  { store  }  from '../Redux/store';
 const App =({ Component, pageProps }: AppProps) =>{
  return (
    <Provider store={store}>
    <>
     
    <Head>
       
    <title>Portfolio SLIMANE</title>
    <meta name='viewport' content='width=device-width, inital-scale=1' />
    <meta name="theme-color" content="black"></meta>
  </Head>

  <Component {...pageProps} />
  
  </>
  </Provider>
  )
}
export default App