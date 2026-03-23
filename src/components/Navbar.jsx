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
        <div className="fixed inset-0 z-50 bg-menu-bg md:hidden">
          <div className="flex h-full flex-col px-6 py-6">
            <div className="flex items-center justify-between">
              <h2 className="text-3xl font-semibold tracking-tight text-nav-link">
                WA.
              </h2>

              <button
                onClick={() => setMenuOpen(false)}
                className="text-4xl leading-none text-primary-text"
              >
                ×
              </button>
            </div>

            <div className="flex flex-1 flex-col items-center justify-center gap-8 text-2xl">
              <NavLink
                to="/"
                onClick={() => setMenuOpen(false)}
                className="text-nav-link transition hover:opacity-70"
              >
                Home
              </NavLink>

              <NavLink
                to="/projects"
                onClick={() => setMenuOpen(false)}
                className="text-nav-link transition hover:opacity-70"
              >
                Projetos
              </NavLink>

              <NavLink
                to="/about"
                onClick={() => setMenuOpen(false)}
                className="text-nav-link transition hover:opacity-70"
              >
                Sobre
              </NavLink>

              <NavLink
                to="/contact"
                onClick={() => setMenuOpen(false)}
                className="text-nav-link transition hover:opacity-70"
              >
                Contato
              </NavLink>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
