import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-slate-300">
      <Header />

      <About />
      <Portfolio />
      <Contact />

      <Footer />
      
    </main>
  )
}
