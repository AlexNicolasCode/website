import '../src/styles/home.css';
import '../src/styles/reset.css';
import type { AppProps } from 'next/app';

import { FilterContextProvider } from "../src/contexts/FilterContext"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <FilterContextProvider>
      <Component {...pageProps} />
    </FilterContextProvider>
  )
}
export default MyApp