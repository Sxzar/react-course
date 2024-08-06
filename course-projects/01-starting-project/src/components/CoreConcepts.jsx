import React from "react";
import CoreConcept from "./CoreConcept";
import { CORE_CONCEPTS } from "../data";

const CoreConcepts = () => {
  return (
    <section id="core-concepts">
      <h2>Time to get started!</h2>
      <ul>
        {CORE_CONCEPTS.map((concept, key) => (
          <CoreConcept key={key} {...concept} />
        ))}
      </ul>
    </section>
  );
};

export default CoreConcepts;
