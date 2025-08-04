// src/pages/AboutPage.jsx
import Navbar from '../components/Navbar';
import HeroAbout from '../sections/HeroAbout';
import Team from '../sections/Team';
import MissionVision from '../sections/MissionVision';
import Footer from '../components/Footer';

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <Team />
      <HeroAbout />
      <MissionVision />
      <Footer />
    </>
  );
}
