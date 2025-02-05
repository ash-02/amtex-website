import React, { useState, useEffect } from "react";

const Typewriter = () => {
  const texts = ["Shaping Futures", "Inspiring Growth", "Unlocking Potential", "Creating Impact", "Transforming Lives"];
  const typingSpeed = 100;
  const deletingSpeed = 50;
  const delayBetweenTexts = 1000;
  const startDelay = 3000; // Initial delay before typing starts (2 seconds)
  
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    // Introduce a delay before starting the typewriter effect
    const startTimeout = setTimeout(() => {
      setHasStarted(true);
    }, startDelay);

    return () => clearTimeout(startTimeout);
  }, []);

  useEffect(() => {
    if (!hasStarted) return; // Wait for the initial delay before starting typing

    let timeout;

    if (!isDeleting && charIndex < texts[index].length) {
      timeout = setTimeout(() => {
        setText((prev) => prev + texts[index][charIndex]);
        setCharIndex((prev) => prev + 1);
      }, typingSpeed);
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setText((prev) => prev.slice(0, -1));
        setCharIndex((prev) => prev - 1);
      }, deletingSpeed);
    } else if (!isDeleting && charIndex === texts[index].length) {
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, delayBetweenTexts);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % texts.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, index, hasStarted]);

  return (
    <span className="text-cyan-400">
      {text}<span className="cursor">|</span>
    </span>
  );
};

export default Typewriter;