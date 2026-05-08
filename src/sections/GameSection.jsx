import { motion } from "framer-motion";

import {
  FaGooglePlay,
  FaGamepad,
} from "react-icons/fa";

import {
  SiUnity,
} from "react-icons/si";

import { PiFileCSharp } from "react-icons/pi";

import phone from "../assets/game/phone-frame.png";
import gameUI from "../assets/game/dagorami-ui.jpg";

export default function GameSection() {

  return (
    <section id="jeux" className="relative py-32 px-6 overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute right-0 top-0 w-[800px] h-[800px] bg-cyan-500/5 rounded-full blur-3xl floating-glow"></div>

      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 md:gap-20 items-center">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >

          <p className="text-cyan-400 uppercase tracking-[5px] text-sm mb-4">
            Game Development
          </p>

          <h2 className="text-5xl md:text-7xl font-black leading-none">

            Dago
            <span className="block text-cyan-400">
              Rami
            </span>

          </h2>

          <p className="mt-8 text-gray-400 text-lg leading-relaxed max-w-2xl">

            A modern Malagasy card game experience developed with Unity for Android.

            Combining immersive UI, cinematic visuals and strategic multiplayer gameplay inspired by traditional Rami.

          </p>

          {/* TECH STACK */}
          <div className="mt-12 flex flex-wrap gap-5">

            <div className="px-6 py-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl flex items-center gap-4">

              <SiUnity className="text-cyan-400 text-2xl" />

              <span>Unity Engine</span>

            </div>

            <div className="px-6 py-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl flex items-center gap-4">

              <PiFileCSharp className="text-cyan-400 text-2xl" />

              <span>C# Programming</span>

            </div>

            <div className="px-6 py-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl flex items-center gap-4">

              <FaGamepad className="text-cyan-400 text-2xl" />

              <span>Mobile Gaming</span>

            </div>

          </div>

          {/* BUTTONS */}
          <div className="mt-12 flex flex-wrap gap-5">

            <button className="px-8 py-4 rounded-full bg-cyan-500 hover:bg-cyan-400 transition text-black font-bold flex items-center gap-3 shadow-[0_0_40px_rgba(34,211,238,0.5)]">

              <FaGooglePlay />

              Bientôt Disponible

            </button>

            <button className="px-8 py-4 rounded-full border border-cyan-500/30 text-cyan-300 hover:bg-cyan-500/10 transition">

              View Gameplay

            </button>

          </div>

        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative flex justify-center"
        >

          {/* GLOW */}
          <div className="absolute w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-3xl floating-glow"></div>

          {/* PHONE MOCKUP */}
          <div className="relative z-10">

            {/* PHONE FRAME */}
            <img
              src={phone}
              alt="Phone"
              className="relative z-20 w-[1000px] drop-shadow-[0_0_50px_rgba(34,211,238,0.25)]"
            />

            {/* GAME SCREEN */}
            <img
              src={gameUI}
              alt="DagoRami"
              className="absolute top-[18px] left-[18px] w-[304px] h-[658px] object-cover rounded-[38px] z-10 floating-glow"
            />

          </div>

          {/* FLOATING CARD */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{
              repeat: Infinity,
              duration: 4,
            }}
            className="absolute top-10 -left-10 backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-6 floating-glow"
          >

            <p className="text-cyan-400 uppercase tracking-[3px] text-xs mb-2">
              Status
            </p>

            <h3 className="text-3xl font-black">
              In Development
            </h3>

          </motion.div>

          {/* FLOATING CARD */}
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{
              repeat: Infinity,
              duration: 5,
            }}
            className="absolute bottom-10 -right-10 backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-6 floating-glow"
          >

            <p className="text-cyan-400 uppercase tracking-[3px] text-xs mb-2">
              Platform
            </p>

            <h3 className="text-3xl font-black">
              Android
            </h3>

          </motion.div>

        </motion.div>

      </div>

    </section>
  );
}