import Nav from '@/components/sections/Nav'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Leadership from '@/components/sections/Leadership'
import Expertise from '@/components/sections/Expertise'
import Products from '@/components/sections/Products'
import AILeadership from '@/components/sections/AILeadership'
import AIDomainProduct from '@/components/sections/AIDomainProduct'
import Philosophy from '@/components/sections/Philosophy'
import Experience from '@/components/sections/Experience'
import Education from '@/components/sections/Education'
import Testimonials from '@/components/sections/Testimonials'
import Contact from '@/components/sections/Contact'
import Footer from '@/components/sections/Footer'

export default function App() {
  return (
    <main className="relative bg-[#0a0a0a] text-neutral-100 selection:bg-white/20">
      <Nav />
      <Hero />
      <About />
      <Leadership />
      <Expertise />
      <Products />
      <AILeadership />
      <AIDomainProduct />
      <Philosophy />
      <Experience />
      <Education />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}