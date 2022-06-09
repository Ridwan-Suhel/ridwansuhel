import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import About from "./pages/About/About";
import ContactPage from "./pages/ContactPage/ContactPage";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import Project from "./pages/Project/Project";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/project" element={<Project />}></Route>
        <Route path="/contact" element={<ContactPage />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
