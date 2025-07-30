import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logoDark from "../assets/cedeim_logotipo.png";
import logoLight from "../assets/cedeim_logotipo.png";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleToggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <>
      <motion.nav
        className={`navbar ${scrolled || menuOpen ? "scrolled" : ""}`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="navbar-content">
          <img
            src={scrolled ? logoLight : logoDark}
            alt="CEDEIM logo"
            className="logo"
          />

          <div
            className={`hamburger ${menuOpen ? "open" : ""}`}
            onClick={handleToggleMenu}
          >
            <span className="bar" />
            <span className="bar" />
            <span className="bar" />
          </div>

          <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
            <li>
              <Link
                className={scrolled ? "link-dark" : "link-light"}
                to="/"
                onClick={() => setMenuOpen(false)}
              >
                Inicio
              </Link>
            </li>
            <li>
              <Link
                className={scrolled ? "link-dark" : "link-light"}
                to="/about"
                onClick={() => setMenuOpen(false)}
              >
                Nosotros
              </Link>
            </li>
            <li>
              <a className={scrolled ? "link-dark" : "link-light"} href="#">
                Servicios
              </a>
            </li>
            <li>
              <a className={scrolled ? "link-dark" : "link-light"} href="#">
                Contacto
              </a>
            </li>
          </ul>
        </div>
      </motion.nav>

      {/* Overlay para menú mobile */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            onClick={handleToggleMenu}
          />
        )}
      </AnimatePresence>
    </>
  );
}
