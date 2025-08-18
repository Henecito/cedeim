import { motion } from "framer-motion";
import "./Contact.css";

export default function Contact() {
  return (
    <section className="contact">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        Contáctanos
      </motion.h2>

      <div className="contact-container">
        <div className="contact-info">
          <h3>Información</h3>
          <p><strong>Teléfono:</strong> +56 9 1234 5678</p>
          <p><strong>Email:</strong> contacto@cedeim.cl</p>
          <p><strong>Dirección:</strong> Av. Salud 123, Santiago, Chile</p>
        </div>

        <form className="contact-form">
          <input type="text" placeholder="Nombre" required />
          <input type="email" placeholder="Correo electrónico" required />
          <textarea placeholder="Tu mensaje" rows="5" required></textarea>
          <button type="submit">Enviar mensaje</button>
        </form>
      </div>
    </section>
  );
}
