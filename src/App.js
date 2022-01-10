import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./pages/About";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <Router>
      <div className="font-sans gap-10 flex flex-col justify-between h-screen">
          <Navbar />
          <main className="">
            <Routes>
              <Route path="/" element={<Home />}/>  
              <Route path="/about" element={<About />}/>
              <Route path="/notfound" element={<NotFound />} />
              <Route path="/*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
      </div>
    </Router>
    
  );
}

