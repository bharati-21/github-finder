import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <Router>
      <div className="font-sans gap-10 flex-col justify-between h-screen">
          <Navbar />
          <main></main>
      </div>
      
    </Router>
    
  );
}

