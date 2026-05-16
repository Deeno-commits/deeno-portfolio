import { motion } from "framer-motion";
import { FaPlay, FaGithub, FaFacebookF } from "react-icons/fa";
import { SiUnity, SiBlender, } from "react-icons/si";
import { FaMusic } from "react-icons/fa";
import CountUp from "react-countup";

import profile from "../assets/profile.jpg";
import ParticlesBackground from "../components/ParticlesBackground";

export default function Hero() {

  return (
    <section id="accueil" className="relative min-h-screen overflow-hidden bg-[#020617] flex items-center justify-center px-6 pt-24 pb-24 md:pt-32 md:pb-32">

      {/* PARTICLES */}
      <ParticlesBackground />

      {/* BACKGROUND GLOW */}
      <div className="absolute hidden md:block w-[900px] h-[900px] bg-cyan-500/10 rounded-full blur-3xl"></div>

      {/* SCANLINES */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[linear-gradient(to_bottom,white_1px,transparent_1px)] bg-[size:100%_4px]"></div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl w-full grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >

          {/* SMALL TITLE */}
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 mb-8">

            <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></div>

            <span className="text-cyan-300 tracking-[3px] text-xs uppercase">
              Artiste Créatif & Développeur Tech
            </span>

          </div>

          {/* MAIN TITLE */}
          <h1 className="text-5xl sm:text-6xl md:text-8xl xl:text-9xl font-black leading-none tracking-tight">

            TOLOTRA

            <span className="block text-cyan-400">
              DEENO
            </span>

          </h1>

          {/* DESCRIPTION */}
          <p className="mt-8 text-gray-400 text-lg leading-relaxed max-w-2xl">

            Créateur multidisciplinaire spécialisé en production musicale, visualisation 3D, développement de jeux et expériences numériques immersives.

            Alliant vision artistique et expertise technique pour concevoir des créations cinématiques, futuristes et interactives.

          </p>

          {/* BUTTONS */}
          <div className="mt-10 flex flex-wrap gap-5">

            <a
              href="#projets" className="px-8 py-4 rounded-full bg-cyan-500 hover:bg-cyan-400 transition text-black font-bold flex items-center gap-3 shadow-[0_0_40px_rgba(34,211,238,0.5)]">

              <FaPlay />

              Découvrir le portfolio

            </a>

            <a 
              href="#contact" className="px-8 py-4 rounded-full border border-cyan-500/30 text-cyan-300 hover:bg-cyan-500/10 transition">

              Me contacter

            </a>

          </div>

          {/* SOCIALS */}
          <div className="mt-10 flex gap-5">

            <a
              href="https://github.com/Deeno-commits"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:border-cyan-400 hover:text-cyan-400 transition"
            >

              <FaGithub />

            </a>

            <a 
              href="https://web.facebook.com/profile.php?id=61563843202962" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:border-cyan-400 hover:text-cyan-400 transition"
            >

              <FaFacebookF />

            </a>

          </div>

        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="relative flex justify-center"
        >

          {/* GLOW */}
          <div className="absolute w-[450px] h-[450px] bg-cyan-400/20 rounded-full blur-3xl"></div>

          {/* PROFILE IMAGE */}
          <div className="relative z-10">

            <img
              src={profile}
              alt="Deeno"
              className="w-[380px] md:w-[460px] object-cover rounded-[40px] border border-cyan-500/20 shadow-[0_0_60px_rgba(34,211,238,0.25)]"
            />

          </div>

          {/* FLOATING CARD 1 */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{
              repeat: Infinity,
              duration: 4,
            }}
            className="absolute top-10 -left-8 backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-5"
          >

            <div className="flex items-center gap-3">

              <FaMusic className="text-orange-400 text-2xl" />

              <div>

                <h3 className="text-2xl font-bold">
                  <CountUp end={12} duration={3} />+
                </h3>

                <p className="text-gray-400 text-sm">
                  Années en production musicale
                </p>

              </div>

            </div>

          </motion.div>

          {/* FLOATING CARD 2 */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{
              repeat: Infinity,
              duration: 5,
            }}
            className="absolute bottom-10 -right-8 backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-5"
          >

            <div className="flex items-center gap-3">

              <SiUnity className="text-cyan-400 text-2xl" />

              <div>

                <h3 className="text-2xl font-bold">
                  <CountUp end={4} duration={3} />+
                </h3>

                <p className="text-gray-400 text-sm">
                  Années en développement de jeux
                </p>

              </div>

            </div>

          </motion.div>

          {/* FLOATING CARD 3 */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{
              repeat: Infinity,
              duration: 6,
            }}
            className="absolute bottom-40 left-0 backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-5"
          >

            <div className="flex items-center gap-3">

              <SiBlender className="text-orange-300 text-2xl" />

              <div>

                <h3 className="text-2xl font-bold">
                  <CountUp end={5} duration={3} />+
                </h3>

                <p className="text-gray-400 text-sm">
                  Années d'expérience 3D
                </p>

              </div>

            </div>

          </motion.div>

        </motion.div>

      </div>

    </section>
  );
}