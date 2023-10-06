"use client";
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import { GlobalProvider } from './components/context';
import { useState, useLayoutEffect } from 'react';

export default function Home() {
  const [ screenNotSupported, setScreenNotSupported ] = useState(false);
  useLayoutEffect(() => {
    const badScreen = ((window.innerHeight / window.innerWidth) < 0.60);
    setScreenNotSupported(badScreen);
  console.log("screenNotSupported=== ", badScreen, window.innerHeight / window.innerWidth);
  }, []);
  return (
    // <main className="flex min-h-screen flex-col bg-slate-300">
    <main className="flex  flex-col bg-slate-300">

      { 
      // screenNotSupported !== "wait" &&
          screenNotSupported
            ?
              <div className='h-screen text-center text-xl bg-gradient-to-tr from-blue-100 to-blue-900 text-white'>
                  <p className='font-bold mt-16 mb-4'>Sorry, your screen ratio (height vs. width) is not supported for this website.</p>
                  <p className='font-bold mb-8'>Please, utilize a device with a bigger height in relation to its width.</p>
                  <p className='font-bold'>Thank you for your understanding. :)</p>
              </div>
            :
              <GlobalProvider>
                <Header />

                <About />
                <Portfolio />
                <Contact />

                <Footer />
              </GlobalProvider>
      }
    </main>
  )
}
