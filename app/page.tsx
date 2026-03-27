/*
 * HOME PAGE — app/page.tsx → renders at "/"
 *
 * This is the main single-page scroll experience.
 * Each section is a separate component for:
 *   - Reusability (components can be used elsewhere)
 *   - Readability (each file is focused and small)
 *   - Maintainability (change one section without touching others)
 *
 * The order of components here = the scroll order on the page.
 */

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Trainers from "./components/Trainers";
import VisualBreak from "./components/VisualBreak";
import Pricing from "./components/Pricing";
import Location from "./components/Location";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Trainers />
        <VisualBreak />
        <Pricing />
        <Location />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
