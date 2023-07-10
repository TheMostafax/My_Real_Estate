import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Home from "./components/pages/home";
import Features from "./components/pages/features";
import Sales from "./components/pages/onsale";
import About from "./components/pages/about";
import Client from "./components/pages/clients";
import Service from "./components/pages/service";
import Contact from "./components/pages/contact";
import Demo from "./components/pages/demo";
import './index.css'
function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Features />
      <Sales />      
      <Service />
      <Demo />
      <Client />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;












