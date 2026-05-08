import { motion } from "framer-motion";

import {
  FaPlay,
  FaPause,
  FaMusic,
} from "react-icons/fa";

import { useRef, useState } from "react";

import studio from "../assets/music/studio.jpg";
import track from "../assets/music/track.mp3";

export default function MusicSection() {

  const audioRef = useRef(null);

  const [playing, setPlaying] = useState(false);

  const toggleMusic = () => {

    if (!audioRef.current) return;

    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }

    setPlaying(!playing);
  };

  return (
    <section id="musique" className="relative py-32 px-6 overflow-hidden">

      {/* BACKGROUND */}
      <div className="absolute inset-0">

        <img
          src={studio}
          alt="Studio"
          className="w-full h-full object-cover opacity-10"
        />

      </div>

      {/* GLOW */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:block w-[900px] h-[900px] bg-cyan-500/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >

          <p className="text-cyan-400 uppercase tracking-[5px] text-sm mb-4">
            Production Musicale
          </p>

          <h2 className="text-5xl md:text-7xl font-black leading-none">

            Sound Design
            <span className="block text-cyan-400">
              Cinématique
            </span>

          </h2>

          <p className="mt-8 text-gray-400 text-lg leading-relaxed max-w-2xl">

            12 ans d'expérience en production musicale, sound design, mixage et mastering avec FL Studio.

            Spécialisé en Melodic Future Bass, Dubstep, Trap, Ambient et compositions cinématiques.

          </p>

          {/* GENRES */}
          <div className="mt-10 flex flex-wrap gap-4">

            {[
              "Future Bass",
              "Dubstep",
              "Trap",
              "Ambient",
              "Cinematic",
              "Dancehall",
            ].map((genre, index) => (

              <div
                key={index}
                className="px-5 py-3 rounded-full bg-white/5 border border-white/10 text-cyan-300 backdrop-blur-xl"
              >

                {genre}

              </div>

            ))}

          </div>

        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative"
        >

          {/* PLAYER CARD */}
          <div className="relative backdrop-blur-2xl bg-white/5 border border-white/10 rounded-[40px] p-10 overflow-hidden">

            {/* GLOW */}
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-cyan-500/10 rounded-full blur-3xl floating-glow"></div>

            {/* TOP */}
            <div className="flex items-center gap-5">

              <div className="w-20 h-20 rounded-3xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 text-3xl">

                <FaMusic />

              </div>

              <div>

                <h3 className="text-2xl font-black">
                  Deeno Music
                </h3>

                <p className="text-gray-400">
                  Producteur • Compositeur
                </p>

              </div>

            </div>

            {/* WAVEFORM */}
            <div className="mt-12 flex items-end gap-2 h-32">

              {[40, 70, 30, 90, 60, 110, 50, 75, 35, 100, 45, 80].map((height, index) => (

                <motion.div
                  key={index}
                  animate={{
                    height: [
                      `${height}px`,
                      `${height + 20}px`,
                      `${height}px`,
                    ],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 1 + index * 0.1,
                  }}
                  className="w-4 rounded-full bg-gradient-to-t from-cyan-500 to-cyan-200 shadow-[0_0_15px_rgba(34,211,238,0.5)]"
                />

              ))}

            </div>

            {/* CONTROLS */}
            <div className="mt-12 flex items-center justify-between">

              <button
                onClick={toggleMusic}
                className="w-20 h-20 rounded-full bg-cyan-500 hover:bg-cyan-400 transition text-black text-2xl flex items-center justify-center shadow-[0_0_40px_rgba(34,211,238,0.5)]"
              >

                {playing ? <FaPause /> : <FaPlay />}

              </button>

              <div className="text-right">

                <p className="text-cyan-400 text-sm uppercase tracking-[3px]">
                  Lecture en cours
                </p>

                <h4 className="text-2xl font-black">
                  Session Future Bass
                </h4>

              </div>

            </div>

            {/* AUDIO */}
            <audio ref={audioRef} src={track}></audio>

          </div>

        </motion.div>

      </div>

    </section>
  );
}