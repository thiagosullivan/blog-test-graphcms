import React, { useEffect, useSate } from 'react';
import { Layout } from '../components';
// import 'tailtwindcss/tailwind.css';
import '../styles/globals.scss';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
