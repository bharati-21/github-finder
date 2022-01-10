import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function App() {
  return (
    <Router>
      <div className="font-sans gap-10 flex flex-col justify-between h-screen">
          <Navbar />
          <main className="max-w-screen-lg max-w-full m-auto">
          </main>
          <Footer />
      </div>
    </Router>
    
  );
}

