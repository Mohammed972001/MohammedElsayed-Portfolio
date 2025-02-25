import Navbar from './component/navbar';
import Home from './component/home';
import About from './component/about';
import MyWork from './component/MyWork';
import Contact from './component/contact';
import Footer from './component/footer';

function App() {
  return (
    <div className="w-full min-h-screen bg-[#18181b] flex flex-col">
      <Navbar />
      <div id="home">
        <Home />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="work">
        <MyWork />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
