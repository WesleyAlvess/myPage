import { useState } from "react"
import { NavLink } from "react-router-dom"

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <h2 className=" text-3xl font-semibold tracking-tight text-nav-link ">
            WA.
          </h2>

          <div className="hidden items-center gap-8 text-sm md:flex">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "px-5 py-2 text-nav-link"
                  : "px-5 py-2 text-primary-text transition hover:text-nav-link"
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/projects"
              className={({ isActive }) =>
                isActive
                  ? "px-5 py-2 text-nav-link"
                  : "px-5 py-2 text-primary-text transition hover:text-nav-link"
              }
            >
              Projetos
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "px-5 py-2 text-nav-link"
                  : "px-5 py-2 text-primary-text transition hover:text-nav-link"
              }
            >
              Sobre
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "px-5 py-2 text-nav-link"
                  : "px-5 py-2 text-primary-text transition hover:text-nav-link"
              }
            >
              Contato
            </NavLink>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="relative flex h-6 w-6 items-center justify-center md:hidden"
          >
            <span
              className={`absolute h-0.5 w-6 bg-primary-text transition-all duration-300 ${menuOpen ? "rotate-45" : "-translate-y-2"
                }`}
            ></span>

            <span
              className={`absolute h-0.5 w-6 bg-primary-text transition-all duration-300 ${menuOpen ? "-rotate-45" : "translate-y-2"
                }`}
            ></span>
          </button>
        </nav>
      </div>

      {menuOpen && (
        <div className="absolute left-0 top-full z-50 w-full bg-menu-bg py-10 shadow-md md:hidden">
          <div className="flex flex-col items-center justify-center gap-8 text-xl">
            <NavLink
              to="/"
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? "font-medium text-nav-link"
                  : "text-primary-text transition hover:text-nav-link"
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/projects"
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? "font-medium text-nav-link"
                  : "text-primary-text transition hover:text-nav-link"
              }
            >
              Projetos
            </NavLink>

            <NavLink
              to="/about"
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? "font-medium text-nav-link"
                  : "text-primary-text transition hover:text-nav-link"
              }
            >
              Sobre
            </NavLink>

            <NavLink
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? "font-medium text-nav-link"
                  : "text-primary-text transition hover:text-nav-link"
              }
            >
              Contato
            </NavLink>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
