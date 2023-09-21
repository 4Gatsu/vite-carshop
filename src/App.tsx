import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <div>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/vite-carshop/home" element={<Home />} />
        <Route path="/vite-carshop/about" element={<About />} />
        <Route path="/vite-carshop/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}
export default App;
