
import { Navbar } from '@/components/navbar';
import { Hero } from '@/components/hero';
import { About } from '@/components/about';
import { Skills } from '@/components/skills';
import { Education } from '@/components/education';
import { Experience } from '@/components/experience';
import { Services } from '@/components/services';
import { Portfolio } from '@/components/portfolio';
import { Contact } from '@/components/contact';
import { Footer } from '@/components/footer';
import { ScrollTop } from '@/components/scroll-top';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <main className="container mx-auto px-4 md:px-8">
        <About />
        <Skills />
        {/* <Education /> */}
        {/* <Experience /> */}
        <Services />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
      <ScrollTop />
    </div>
  );
};

export default Index;
