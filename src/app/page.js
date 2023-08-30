import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

export default function Home() {
  return (
    // <main className="flex min-h-screen flex-col items-center justify-between p-24 border border-red-600">
    <main className="flex min-h-screen flex-col">
      <Header />

      <About />
      <Portfolio />
      <Contact />

      <Footer />
      
    </main>
  )
}
