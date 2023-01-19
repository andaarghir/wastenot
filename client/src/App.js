import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import SearchPage from "./pages/SearchPage";
import SearchMeal from "./pages/SearchMeal";
import ShowMeals from "./pages/ShowMeals";
import SearchEvent from "./pages/SearchEvent";
import HostEvent from "./pages/HostEvent";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { BrowserRouter , Route, Routes } from "react-router-dom";
import { Container } from 'react-bootstrap';
import ShowEvents from "./pages/ShowEvents";
<<<<<<< HEAD
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
=======
import ShareMeal from "./pages/ShareMeal";
>>>>>>> e28800a407083f3f998cb63cd72e12d96277b7cb

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
<<<<<<< HEAD
          <Route path="/signup"  element={<SignUp/>} />
          <Route path="/login"  element={<LogIn/>} />
=======
          <Route path="/hostevent"  element={<HostEvent/>} />
          <Route path="/shareMeal"  element={<ShareMeal/>} />
>>>>>>> e28800a407083f3f998cb63cd72e12d96277b7cb
        </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
    </Container>
  </>
}

export default App;
