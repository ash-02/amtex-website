import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const AnimatedSVG = () => {
    const waveRefs = useRef([]);

    useEffect(() => {
      waveRefs.current.forEach((wave, i) => {
        gsap.to(wave, {
          duration: 5 + i * 0.5,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          attr: {
            d: generateWavePath(i),
          },
        });
      });
    }, []);
  
    const generateWavePath = (offset) => {
      let path = "M 0,400 ";
      let waveHeight = 20 + offset * 10; // Controls height
      let frequency = 100; // Controls width
  
      for (let x = 0; x <= 960; x += frequency) {
        let y = 400 + Math.sin(x * 0.01 + offset) * waveHeight;
        path += `Q ${x + frequency / 2},${y} ${x + frequency},400 `;
      }
  
      path += "L 960,541 L 0,541 Z";     // Close path
      return path;
    };
  
    return (
      <svg
        viewBox="0 0 960 540"
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <rect x="0" y="0" width="960" height="540" fill="#001220"></rect>
        {["#e76f51", "#ea5a47", "#dc4741", "#c6304c", "#9b1d46"].map(
          (color, index) => (
            <path
              key={index}
              ref={(el) => (waveRefs.current[index] = el)}
              d={generateWavePath(index)}
              fill={color}
              opacity={0.7 - index * 0.1}
            />
          )
        )}
      </svg>
    );
};

export default AnimatedSVG;