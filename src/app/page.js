"use client";
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import { GlobalProvider } from './components/context';


export default function Home() {
  
  return (
    <main className="flex min-h-screen flex-col bg-slate-300">

      <GlobalProvider>
        <Header />

        <About />
        <Portfolio />
        <Contact />

        <Footer />
      </GlobalProvider>
    </main>
  )
}
