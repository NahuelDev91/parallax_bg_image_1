import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ParallaxProvider } from '../context/parallax/ParallaxProvider';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ParallaxProvider>
      <Component {...pageProps} />
    </ParallaxProvider>
  )
}

export default MyApp
