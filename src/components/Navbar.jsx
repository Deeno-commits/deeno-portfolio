import { motion } from "framer-motion";

const links = [
  {
    name: "Accueil",
    href: "#accueil",
  },

  {
    name: "Compétences",
    href: "#competences",
  },

  {
    name: "Projets",
    href: "#projets",
  },

  {
    name: "Musique",
    href: "#musique",
  },

  {
    name: "3D",
    href: "#galerie3d",
  },

  {
    name: "Contact",
    href: "#contact",
  },
];

export default function Navbar() {

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      className="
        fixed
        top-0
        left-0
        w-full
        z-50
        backdrop-blur-2xl
        bg-[#020617]/50
        border-b
        border-white/10
      "
    >

      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

        {/* LOGO */}
        <a
          href="#accueil"
          className="text-2xl font-black tracking-tight"
        >

          RA
          <span className="text-cyan-400">
            SOLOFONDRAIBE
          </span>

        </a>

        {/* NAV LINKS */}
        <div className="hidden md:flex items-center gap-8">

          {links.map((link, index) => (

            <a
              key={index}
              href={link.href}
              className="
                text-sm
                uppercase
                tracking-[2px]
                text-gray-300
                hover:text-cyan-400
                transition
                relative
                group
              "
            >

              {link.name}

              {/* HOVER LINE */}
              <span className="
                absolute
                left-0
                -bottom-2
                w-0
                h-[2px]
                bg-cyan-400
                transition-all
                duration-300
                group-hover:w-full
              "></span>

            </a>

          ))}

        </div>

        {/* MOBILE BUTTON */}
        <button className="md:hidden text-cyan-400 text-3xl">

          ☰

        </button>

      </div>

    </motion.nav>
  );
}