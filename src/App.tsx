import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from './components/banner';
import Home from './components/home';
import About from './components/about';
import Services from './components/services';
import Healthcare from './components/healthcare';
import Commercial from './components/commercial';
import Contact from './components/contact';
import Test from './components/test';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/footer';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Banner />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/services" element={<Services />}></Route>
          <Route path="/healthcare" element={<Healthcare />}></Route>
          <Route path="/commercial" element={<Commercial />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/test" element={<Test />}></Route>
        </Routes> 
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
