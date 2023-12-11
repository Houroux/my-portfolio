import React from "react";

export default function First() {
  return (
    <div
      id="first"
      className="flex flex-col items-center justify-center bg-second py-16 "
    >
      <a
        className="mb-4 rounded bg-third p-4 text-white sm:mb-8 sm:p-8 sm:text-xl"
        href="#contact"
      >
        Me contacter
      </a>
      <a
        className="mb-4  rounded bg-third p-4 text-white sm:mb-8 sm:p-8  sm:text-xl"
        href="https://www.linkedin.com/in/arthur-trovato/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Linkedin
      </a>
      <a
        className="rounded  bg-third p-4 text-white sm:p-8  sm:text-xl"
        href="https://arthurtrovato.github.io/my-portfolio/CV_Arthur_TROVATO_3WA.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
        Mon CV
      </a>
    </div>
  );
}
