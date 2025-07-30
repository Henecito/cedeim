// src/pages/AboutPage.jsx
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main style={{ padding: '2rem', minHeight: '80vh' }}>
        <h1>Quiénes Somos</h1>
        <p>Esta es una página de prueba para el About.</p>
      </main>
      <Footer />
    </>
  );
}
