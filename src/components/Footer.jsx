import React, { useEffect } from "react";
import "./Footer.css";
import logo from "../assets/cedeim_logotipo.png";

export default function Footer() {
  useEffect(() => {
    const footer = document.querySelector(".footer");
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          footer.classList.add("footer-visible");
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(footer);
  }, []);

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-column footer-logo-column">
          <img src={logo} alt="CEDEIM Logo" className="footer-logo" />
        </div>
        <div className="footer-column">
          <h4>Contacto</h4>
          <div className="footer-contact-info">
            <p>Angol, Chile</p>
            <p>+56 9 1234 5678</p>
            <p>info@cedeim.cl</p>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} CEDEIM. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
