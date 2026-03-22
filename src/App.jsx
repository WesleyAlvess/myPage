import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import Projects from "./pages/Projects"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Navbar from "./components/Navbar"

function App() {

  return (
    <BrowserRouter>
      <main className="min-h-screen bg-menu-bg text-primary-text">
        <Navbar />
        <div className="mx-auto max-w-6xl px-0 py-2 sm:px-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </main>
    </BrowserRouter>
  )
}

export default App
