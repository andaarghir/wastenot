import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Events from "./pages/Events";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { BrowserRouter , Route, Routes } from "react-router-dom";
import { Container } from 'react-bootstrap';

function App() {
  return <>
  <Container>
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/"  element={<Home/>} />
          <Route path="/events"  element={<Events/>} />
          <Route path="/about"  element={<About/>} />
          <Route path="/contact"  element={<Contact/>} />
        </Routes>

      </BrowserRouter>
    </div>
    </Container>
  </>
}

export default App;
