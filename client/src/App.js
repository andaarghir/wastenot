import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import SearchPage from "./pages/SearchPage";
import SearchMeal from "./pages/SearchMeal";
import ShowMeals from "./pages/ShowMeals";
import SearchEvent from "./pages/SearchEvent";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { BrowserRouter , Route, Routes } from "react-router-dom";
import { Container } from 'react-bootstrap';
import ShowEvents from "./pages/ShowEvents";

function App() {
  return <>
  <Container>
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/"  element={<Home/>} />
          <Route path="/search"  element={<SearchPage/>} />
          <Route path="/about"  element={<About/>} />
          <Route path="/contact"  element={<Contact/>} />
          <Route path="/meals"  element={<SearchMeal/>} />
          <Route path="/showmeals"  element={<ShowMeals/>} />
          <Route path="/events"  element={<SearchEvent/>} />
          <Route path="/showevents"  element={<ShowEvents/>} />
        </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
    </Container>
  </>
}

export default App;
