import { 
  Navbar, 
  Home, 
  About, 
  MyWork, 
  Contact, 
  Footer, 
  Section 
} from './components/index.js';

function App() {
  return (
    <div className="w-full min-h-screen bg-[#18181b] flex flex-col">
      <Navbar />
      <Section id="home">
        <Home />
      </Section>
      <Section id="about">
        <About />
      </Section>
      <Section id="work">
        <MyWork />
      </Section>
      <Section id="contact">
        <Contact />
      </Section>
      <Footer />
    </div>
  );
}

export default App;
