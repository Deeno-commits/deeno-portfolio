import { motion } from "framer-motion";

import {
  FaGithub,
  FaFacebookF,
  FaEnvelope,
  FaArrowRight,
} from "react-icons/fa";

export default function ContactSection() {

  return (
    <section id="contact" className="relative py-32 px-6 overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:block w-[900px] h-[900px] bg-cyan-500/10 rounded-full blur-3xl floating-glow"></div>

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* TOP */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >

          <p className="text-cyan-400 uppercase tracking-[5px] text-sm mb-4">
            Contact
          </p>

          <h2 className="text-5xl md:text-7xl font-black leading-none">

            Créons
            <span className="block text-cyan-400">
              Quelque Chose d’Incroyable
            </span>

          </h2>

          <p className="mt-8 text-gray-400 text-lg leading-relaxed max-w-3xl mx-auto">

            Ouvert aux collaborations, aux opportunités en freelance,
            aux partenariats créatifs et aux projets numériques innovants.

          </p>

        </motion.div>

        {/* CONTACT CARD */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mt-20 relative backdrop-blur-2xl bg-white/5 border border-white/10 rounded-[40px] p-10 md:p-16 overflow-hidden"
        >

          {/* INNER GLOW */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-3xl floating-glow"></div>

          <div className="relative z-10 grid lg:grid-cols-2 gap-16">

            {/* LEFT */}
            <div>

              <h3 className="text-4xl font-black mb-8">
                Contact Information
              </h3>

              <div className="space-y-6">

                {/* EMAIL */}
                <div className="flex items-center gap-5 p-5 rounded-2xl border border-white/10 bg-white/5">

                  <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 text-xl">

                    <FaEnvelope />

                  </div>

                  <div>

                    <p className="text-gray-400 text-sm">
                      Email
                    </p>

                    <h4 className="text-lg font-bold">
                      deenastibeat@gmail.com
                    </h4>

                  </div>

                </div>

                {/* GITHUB */}
                <a
                  href="https://github.com/Deeno-commits"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-5 p-5 rounded-2xl border border-white/10 bg-white/5 hover:border-cyan-400/40 hover:bg-cyan-500/10 transition"
                >

                  <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 text-xl">

                    <FaGithub />

                  </div>

                  <div>

                    <p className="text-gray-400 text-sm">
                      GitHub
                    </p>

                    <h4 className="text-lg font-bold">
                      https://github.com/Deeno-commits
                    </h4>

                  </div>

                </a>

                {/* FACEBOOK */}
                <a
                  href="https://web.facebook.com/profile.php?id=61563843202962"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-5 p-5 rounded-2xl border border-white/10 bg-white/5 hover:border-cyan-400/40 hover:bg-cyan-500/10 transition"
                >

                  <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 text-xl">

                    <FaFacebookF />

                  </div>

                  <div>

                    <p className="text-gray-400 text-sm">
                      Facebook
                    </p>

                    <h4 className="text-lg font-bold">
                      https://facebook.com/deeno
                    </h4>

                  </div>

                </a>

              </div>

            </div>

            {/* RIGHT */}
            <div>

              <h3 className="text-4xl font-black mb-8">
                Envoyer
              </h3>

              <form
                action="https://formsubmit.co/deenastibeat@gmail.com"
                method="POST"
                className="space-y-6"
              >
                <input
                  type="hidden"
                  name="_captcha"
                  value="false"
                />

                <input
                  type="hidden"
                  name="_template"
                  value="table"
                />

                <input
                  type="hidden"
                  name="_subject"
                  value="Nouveau message Portfolio Deeno"
                />

                {/* INPUT */}
                <input
                  type="text"
                  placeholder="Votre Nom"
                  className="w-full px-6 py-5 rounded-2xl bg-white/5 border border-white/10 outline-none focus:border-cyan-400 transition"
                />

                {/* INPUT */}
                <input
                  type="email"
                  placeholder="Votre Email"
                  className="w-full px-6 py-5 rounded-2xl bg-white/5 border border-white/10 outline-none focus:border-cyan-400 transition"
                />

                {/* TEXTAREA */}
                <textarea
                  rows="6"
                  placeholder="Votre Message"
                  className="w-full px-6 py-5 rounded-2xl bg-white/5 border border-white/10 outline-none focus:border-cyan-400 transition resize-none"
                ></textarea>

                {/* BUTTON */}
                <button
                  type="submit"
                  className="px-8 py-5 rounded-full bg-cyan-500 hover:bg-cyan-400 transition text-black font-bold flex items-center gap-3 shadow-[0_0_40px_rgba(34,211,238,0.5)]"
                >

                  Envoyer

                  <FaArrowRight />

                </button>

              </form>

            </div>

          </div>

        </motion.div>

        {/* FOOTER */}
        <div className="mt-20 text-center">

          <p className="text-gray-500">

            © 2026 Deeno — Creative Tech Artist Portfolio

          </p>

        </div>

      </div>

    </section>
  );
}