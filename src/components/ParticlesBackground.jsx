import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticlesBackground = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
          color: "transparent", // Set to transparent if gradient background exists
        },
        particles: {
          number: { value: 80 }, // Increase count
          shape: { type: "circle" },
          opacity: { value: 0.8 }, // Make them more visible
          size: { value: 3 }, // Increase size
          move: { speed: 0.8, direction: "none", outMode: "bounce" },
          color: { value: "#ffffff" }, // Ensure visible color
          line_linked: { enable: false },
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: "repulse" },
            onClick: { enable: true, mode: "push" },
          },
          modes: {
            repulse: { distance: 100, duration: 0.4 },
            push: { particles_nb: 4 },
          },
        },
      }}
      className="absolute top-0 left-0 w-full h-full"
    />
  );
};

export default ParticlesBackground;