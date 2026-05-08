import { motion, AnimatePresence } from "framer-motion";

export default function Loader({ isLoading }) {

  return (

    <AnimatePresence>

      {isLoading && (

        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: {
              duration: 1,
            },
          }}
          className="
            fixed
            inset-0
            z-[9999]
            bg-[#020617]
            flex
            items-center
            justify-center
            overflow-hidden
          "
        >

          {/* GLOW */}
          <div className="absolute w-[600px] h-[600px] bg-cyan-500/20 rounded-full blur-3xl floating-glow"></div>

          {/* CONTENT */}
          <div className="relative z-10 text-center">

            {/* LOGO */}
            <motion.div
              initial={{
                scale: 0.6,
                opacity: 0,
              }}
              animate={{
                scale: 1,
                opacity: 1,
              }}
              transition={{
                duration: 1,
                ease: "easeOut",
              }}
              className="mb-8"
            >

              <h1 className="
                text-6xl
                md:text-8xl
                font-black
                tracking-tight
              ">

                Dee
                <span className="text-cyan-400">
                  no
                </span>

              </h1>

            </motion.div>

            {/* SUBTITLE */}
            <motion.p
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.5,
                duration: 1,
              }}
              className="
                text-gray-400
                tracking-[6px]
                uppercase
                text-sm
              "
            >

              Creative Tech Artist

            </motion.p>

            {/* LOADING BAR */}
            <div className="mt-12 w-[260px] h-[4px] bg-white/10 rounded-full overflow-hidden mx-auto">

              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{
                  duration: 2.5,
                  ease: "easeInOut",
                }}
                className="h-full bg-cyan-400"
              />

            </div>

          </div>

        </motion.div>

      )}

    </AnimatePresence>
  );
}