import { motion } from "framer-motion";

import {
  FaExpand,
} from "react-icons/fa";

import render1 from "../assets/3d/render1.jpg";
import render2 from "../assets/3d/render2.jpg";
import render3 from "../assets/3d/render3.jpg";
import render4 from "../assets/3d/render4.jpg";
import render5 from "../assets/3d/render5.jpg";
import render6 from "../assets/3d/render6.jpg";

const renders = [
  render1,
  render2,
  render3,
  render4,
  render5,
  render6,
];

export default function Gallery3D() {

  return (
    <section id="galerie3d" className="relative py-32 px-6 overflow-hidden">

      {/* GLOW */}
      <div className="absolute left-0 bottom-0 w-[700px] h-[700px] bg-cyan-500/5 rounded-full blur-3xl floating-glow"></div>

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
            Visualisation 3D
          </p>

          <h2 className="text-5xl md:text-7xl font-black tracking-tight">

            Cinématique
            <span className="text-cyan-400"> Galerie</span>

          </h2>

          <p className="mt-8 text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed">

            Visualisation 3D avancée, rendu architectural et environnements cinématiques
            conçus avec Blender, SketchUp, Lumion, Keyshot, V-Ray et Enscape.

          </p>

        </motion.div>

        {/* MASONRY GRID */}
        <div className="columns-1 sm:columns-2 xl:columns-3 gap-6 space-y-6">

          {renders.map((image, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.08,
              }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl break-inside-avoid"
            >

              {/* IMAGE */}
              <div className="relative overflow-hidden">

                <img
                  src={image}
                  alt="3D Render"
                  className="w-full object-cover group-hover:scale-110 transition duration-700"
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-60"></div>

                {/* HOVER ICON */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">

                  <div className="w-20 h-20 rounded-full bg-cyan-500/20 border border-cyan-400/30 backdrop-blur-xl flex items-center justify-center text-cyan-300 text-2xl shadow-[0_0_30px_rgba(34,211,238,0.5)]">

                    <FaExpand />

                  </div>

                </div>

              </div>

              {/* BOTTOM */}
              <div className="p-6">

                <h3 className="text-2xl font-black mb-2">
                  3D Visualization
                </h3>

                <p className="text-gray-400">
                  Rendu cinématique & Design d'environnement
                </p>

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