import { motion } from "framer-motion";

import {
  SiBlender,
  SiUnity,
  SiUnrealengine,
  SiJavascript,
  SiPython,
  SiCplusplus,
  // SiHtml5,
  // SiCss3,
} from "react-icons/si";

import { DiPhotoshop, DiIllustrator } from "react-icons/di";

import {
  FaMusic,
  FaPenNib,
  FaPaintBrush,
  FaHtml5,
  FaCss3Alt
} from "react-icons/fa";

const skills = [
  {
    icon: <FaMusic />,
    name: "FL Studio / Music Production",
    level: "95%",
    xp: "12 Years",
  },

  {
    icon: <SiBlender />,
    name: "3D & Visualization",
    level: "90%",
    xp: "5 Years",
  },

  {
    icon: <SiUnity />,
    name: "Unity Game Development",
    level: "88%",
    xp: "4 Years",
  },

  {
    icon: <SiUnrealengine />,
    name: "Unreal Engine",
    level: "75%",
    xp: "4 Years",
  },

  {
    icon: <DiPhotoshop />,
    name: "Adobe Photoshop",
    level: "85%",
    xp: "4 Years",
  },

  {
    icon: <DiIllustrator />,
    name: "Adobe Illustrator",
    level: "80%",
    xp: "4 Years",
  },

  {
    icon: <SiJavascript />,
    name: "JavaScript",
    level: "70%",
    xp: "3 Years",
  },

  {
    icon: <SiPython />,
    name: "Python",
    level: "72%",
    xp: "3 Years",
  },

  {
    icon: <SiCplusplus />,
    name: "C++",
    level: "68%",
    xp: "3 Years",
  },

  {
    icon: <FaHtml5 />,
    name: "HTML5",
    level: "85%",
    xp: "4 Years",
  },

  {
    icon: <FaCss3Alt />,
    name: "CSS3",
    level: "82%",
    xp: "4 Years",
  },
];

export default function Skills() {

  return (
    <section id="competences" className="relative py-32 px-6 overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 hidden md:block w-[900px] h-[900px] bg-cyan-500/5 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >

          <p className="text-cyan-400 tracking-[5px] uppercase text-sm mb-4">
            Expertise
          </p>

          <h2 className="text-5xl md:text-7xl font-black tracking-tight">
            Compétences &
            <span className="text-cyan-400"> Technologies</span>
          </h2>

        </motion.div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-8">

          {skills.map((skill, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.05,
              }}
              viewport={{ once: true }}
              className="group backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-cyan-400/30 transition overflow-hidden relative"
            >

              {/* HOVER GLOW */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-cyan-500/5"></div>

              <div className="relative z-10">

                {/* TOP */}
                <div className="flex items-center justify-between mb-5">

                  <div className="flex items-center gap-4">

                    <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-2xl text-cyan-400">

                      {skill.icon}

                    </div>

                    <div>

                      <h3 className="text-xl font-bold">
                        {skill.name}
                      </h3>

                      <p className="text-gray-400 text-sm">
                        {skill.xp}
                      </p>

                    </div>

                  </div>

                  <span className="text-cyan-400 font-bold text-lg">
                    {skill.level}
                  </span>

                </div>

                {/* PROGRESS BAR */}
                <div className="w-full h-3 rounded-full bg-white/10 overflow-hidden">

                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: skill.level }}
                    transition={{
                      duration: 1.4,
                      delay: 0.2,
                    }}
                    viewport={{ once: true }}
                    className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-cyan-200 shadow-[0_0_20px_rgba(34,211,238,0.5)]"
                  />

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}