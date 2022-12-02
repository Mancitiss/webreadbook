import '../styles/globals.css'
import { useEffect } from 'react';


function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const script = document.createElement('script');
  
    script.src =  "https://code.responsivevoice.org/responsivevoice.js?key=HgDAI0ah";
    script.async = true;
    
    document.body.appendChild(script);
    
    console.log('d',script);
    return () => {
        // clearn
        document.body.removeChild(script);
    }
},[]);
  return <Component {...pageProps} />
}

export default MyApp
