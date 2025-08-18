import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Team.css";
import franciscoImg from "../assets/persona.JPG";
import anaImg from "../assets/persona.jpg";
import carlosImg from "../assets/persona.jpg";

const team = [
  {
    name: "Francisco Díaz",
    role: "Kinesiólogo - Fundador",
    image: franciscoImg,
    stars: 5,
    vision:
      "Creo firmemente que la salud y el rendimiento físico deben ir de la mano.",
  },
  {
    name: "Ana González",
    role: "Fisioterapeuta deportiva",
    image: anaImg,
    stars: 4,
    vision:
      "Mi pasión es devolverle el movimiento a las personas con empatía y técnica.",
  },
  {
    name: "Carlos Ramírez",
    role: "Entrenador físico y readaptador",
    image: carlosImg,
    stars: 4,
    vision:
      "Trabajamos cuerpo y mente para una recuperación integral y duradera.",
  },
];

export default function Team() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selected = team[selectedIndex];

  return (
    <section className="character-showcase">
      <div className="info-panel">
        <motion.h1
          className="character-name"
          key={selected.name}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {selected.name}
        </motion.h1>

        {/* Imagen en móvil */}
        <div className="image-mobile">
          <AnimatePresence mode="wait">
            <motion.img
              key={selected.image + "-mobile"}
              src={selected.image}
              alt={selected.name}
              className="hero-img"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
            />
          </AnimatePresence>
        </div>

        <motion.div
          className="section-title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Habilidades
        </motion.div>

        <motion.div
          className="skill-box"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {selected.role}
        </motion.div>

        <div className="section-title">Certificaciones</div>
        <motion.div
          className="stars"
          key={selected.stars}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {[...Array(5)].map((_, i) => (
            <span key={i} className={i < selected.stars ? "filled" : ""}>
              ★
            </span>
          ))}
        </motion.div>

        <motion.p
          className="vision-text"
          key={selected.vision}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          "{selected.vision}"
        </motion.p>

        <div className="section-title">Nuestro equipo</div>
        <div className="hex-grid">
          {team.map((m, index) => (
            <motion.div
              key={index}
              className={`hex ${index === selectedIndex ? "active" : ""}`}
              onClick={() => setSelectedIndex(index)}
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="hex-inner">
                <img src={m.image} alt={m.name} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Imagen en escritorio */}
      <div className="image-panel">
        <AnimatePresence mode="wait">
          <motion.img
            key={selected.image + "-desktop"}
            src={selected.image}
            alt={selected.name}
            className="hero-img"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
          />
        </AnimatePresence>
      </div>
    </section>
  );
}
