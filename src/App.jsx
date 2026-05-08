import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import MusicSection from "./sections/MusicSection";
import Gallery3D from "./sections/Gallery3D";
import ContactSection from "./sections/ContactSection";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Loader from "./components/Loader";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);

  }, []);

  return (
    <>
      <Loader isLoading={loading} />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="
          bg-[#020617]
          text-white
          overflow-x-hidden
          min-h-screen
        "
      >

       <Navbar />

        <Hero />
      
        <Skills />

        <Projects />

        <MusicSection />

        <Gallery3D />

        <ContactSection />
      
      </motion.div>

    </>
  );
}

export default App;