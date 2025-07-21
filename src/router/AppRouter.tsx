import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Resume from "../pages/Resume";
import Works from "../pages/Works";
import Contact from "../pages/Contact";

const AppRouter = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/resume" element={<Resume />} />
    <Route path="/works" element={<Works />} />
    <Route path="/contact" element={<Contact />} />
  </Routes>
);

export default AppRouter;
