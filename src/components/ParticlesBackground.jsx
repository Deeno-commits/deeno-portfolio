import { useCallback } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function ParticlesBackground() {
  // Cette fonction sera appelée par le composant Particles lui-même
  const particlesInit = useCallback(async (engine) => {
    // On passe l'instance "engine" fournie par le composant, PAS "window"
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      className="absolute inset-0 z-0"
      init={particlesInit} // On initialise ici
      options={{
        background: {
          color: {
            value: "transparent",
          },
        },
        fpsLimit: 120,
        particles: {
          color: {
            value: "#22d3ee",
          },
          links: {
            color: "#22d3ee",
            distance: 150,
            enable: true,
            opacity: 0.15,
            width: 1,
          },
          move: {
            enable: true,
            speed: 1,
          },
          number: {
            value: 70,
          },
          opacity: {
            value: 0.3,
          },
          size: {
            value: {
              min: 1,
              max: 3,
            },
          },
        },
        detectRetina: true,
      }}
    />
  );
}