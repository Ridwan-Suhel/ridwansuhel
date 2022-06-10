import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import ProjectDetails from "./components/Shared/ProjectDetails";
import ToastBox from "./components/ToastBox/ToastBox";
import About from "./pages/About/About";
import Blog from "./pages/Blog/Blog";
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
        <Route path="/project/:projectId" element={<ProjectDetails />}></Route>
        <Route path="/contact" element={<ContactPage />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <ToastBox />
    </div>
  );
}

export default App;
//   https://i.ibb.co/5F0sgVb/pr-4.png

// https://i.ibb.co/269JHWk/gadgetly-1-min.jpg
// https://i.ibb.co/QXxfjBv/gadgetly-2-min.jpg
// https://i.ibb.co/zm43XMy/gadgetly-3-min.jpg
// https://i.ibb.co/z2xfC68/ma-eng-1-min.jpg
// https://i.ibb.co/CpGL6q8/ma-eng-2-min.jpg
// https://i.ibb.co/3MkRCY4/maeng-3-min.jpg
// https://i.ibb.co/hFVjH8F/toolsplaza-1-min.jpg
// https://i.ibb.co/0KWb6vq/toolsplaza-2-min.jpg
// https://i.ibb.co/CW7rDpV/toolsplaza-3-min.jpg
