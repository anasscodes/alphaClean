
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <div className="font-sans text-gray-800">
      <Navbar />
      <main>
        <section id="home">
          <Hero />
        </section>
        <section id="about" className="py-16 md:py-24 bg-white">
          <About />
        </section>
        <section id="services" className="py-16 md:py-24 bg-gray-50">
          <Services />
        </section>
        <section id="testimonials" className="py-16 md:py-24 bg-white">
          <Testimonials />
        </section>
        <section id="contact" className="py-16 md:py-24 bg-primary-50">
          <Contact />
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;