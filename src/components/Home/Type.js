import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Exploratory Engineer",
          "Professional Coffee Drinker ☕",
          "Curiosity-driven Creator ✋",
          "Eternal Student of the Universe",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 30,
        typeSpeed: 100,
      }}
      onInit={(typewriter) => {
        typewriter
          .typeString("Multidisciplinary Developer")
          .pauseFor(500)
          .deleteChars(9) // Deletes "Developer"
          .pauseFor(500)
          .typeString(" Engineer")
          .pauseFor(1000)
          .deleteChars(8) // Deletes "Engineer"
          .typeString(" Hobbyist")
          .pauseFor(1000)
          .start();
      }}
    />
  );
}

export default Type;
