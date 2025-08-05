// src/sections/MissionVision.jsx
import { motion } from "framer-motion";
import "./MissionVision.css";
import clinicaImg from "../assets/clinica.jpg";

export default function MissionVision() {
  return (
    <section className="mv-container">
      <motion.div
        className="mv-image"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <img src={clinicaImg} alt="Nuestra clínica" />
      </motion.div>

      <motion.div
        className="mv-content"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="mv-title">Comprometidos con tu bienestar</h2>
        <p className="mv-description">
          Desde el año <strong>2012</strong>, nuestra clínica se ha dedicado a
          mejorar la calidad de vida de nuestros pacientes a través de un enfoque
          integral, humano y personalizado en kinesiología, rehabilitación y
          salud funcional.
        </p>

        <p className="mv-description">
          Nos encontramos en <strong>Santiago de Chile</strong>, donde cada día
          atendemos a personas con diferentes necesidades físicas, ayudándolas a
          recuperar su movilidad, autonomía y confianza.
        </p>

        <p className="mv-description">
          En nuestra clínica combinamos tecnología de vanguardia con un equipo
          altamente capacitado y un trato cercano, porque creemos que{" "}
          <em>la recuperación no solo es física, también es emocional</em>.
        </p>

        <ul className="mv-list">
          <li>✔ Más de 10 años de experiencia clínica</li>
          <li>✔ Planes personalizados y seguimiento constante</li>
          <li>✔ Enfoque interdisciplinario en cada tratamiento</li>
          <li>✔ Instalaciones modernas y cómodas</li>
        </ul>
      </motion.div>
    </section>
  );
}
