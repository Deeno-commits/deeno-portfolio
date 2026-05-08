import { motion } from "framer-motion";

import {
  FaPlay,
  FaCode,
  FaMusic,
} from "react-icons/fa";

import {
  SiUnity,
  SiBlender,
} from "react-icons/si";

import dagorami from "../assets/projects/dagorami.jpg";
import music from "../assets/projects/music.jpg";
import render3d from "../assets/projects/3d.jpg";
import software from "../assets/projects/software.jpg";

const projects = [

  {
    title: "DagoRami",
    category: "Jeu de Cartes Android",
    description:
      "Jeu de Rami malgache moderne développé avec Unity pour Android, doté d'une interface immersive et d'une architecture multijoueur.",

    image: dagorami,
    icon: <SiUnity />,
  },

  {
    title: "Production Musicale",
    category: "Beatmaking & Sound Design",
    description:
      "12 ans d'expérience dans la création de compositions cinématiques, mélodiques et futuristes sur FL Studio.",

    image: music,
    icon: <FaMusic />,
  },

  {
    title: "Visualisation 3D",
    category: "Art 3D & Rendu",
    description:
      "Rendu cinématique et modélisation avancée avec Blender, SketchUp et Lumion.",

    image: render3d,
    icon: <SiBlender />,
  },

  {
    title: "Apps & Logiciels",
    category: "Développement",
    description:
      "Création d'applications Android et de logiciels Windows avec interfaces interactives et systèmes sur mesure.",

    image: software,
    icon: <FaCode />,
  },

];

export default function Projects() {

  return (
    <section id="projets" className="relative py-32 px-6 overflow-hidden">

      {/* GLOW */}
      <div className="absolute right-0 top-0 w-[700px] h-[700px] bg-cyan-500/5 blur-3xl rounded-full floating-glow"></div>

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >

          <p className="text-cyan-400 uppercase tracking-[5px] text-sm mb-4">
            Portfolio
          </p>

          <h2 className="text-5xl md:text-7xl font-black tracking-tight">

            Projets
            <span className="text-cyan-400"> Principaux</span>

          </h2>

        </motion.div>

        {/* GRID */}
        <div className="grid lg:grid-cols-2 gap-10">

          {projects.map((project, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              className="group relative rounded-[32px] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl"
            >

              {/* IMAGE */}
              <div className="relative h-[420px] overflow-hidden">

                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/40 to-transparent"></div>

                {/* ICON */}
                <div className="absolute top-6 left-6 w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 backdrop-blur-xl flex items-center justify-center text-cyan-400 text-2xl">

                  {project.icon}

                </div>

              </div>

              {/* CONTENT */}
              <div className="relative p-8">

                <p className="text-cyan-400 uppercase tracking-[3px] text-xs mb-4">

                  {project.category}

                </p>

                <h3 className="text-3xl font-black mb-5">

                  {project.title}

                </h3>

                <p className="text-gray-400 leading-relaxed">

                  {project.description}

                </p>

                {/* BUTTON */}
                <button className="mt-8 inline-flex items-center gap-3 px-6 py-3 rounded-full border border-cyan-500/20 text-cyan-300 hover:bg-cyan-500/10 transition">

                  <FaPlay />

                  Voir le Projet

                </button>

              </div>

              {/* HOVER GLOW */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition pointer-events-none bg-cyan-500/5"></div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}