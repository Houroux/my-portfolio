import React from "react";

export default function First() {
  return (
    <div
      id="first"
      className="flex flex-col items-center justify-center pt-16 "
    >
      <h2 className=" mb-20 w-full cursor-default bg-second py-20  text-center  text-2xl  sm:pt-40 sm:text-3xl">
        Développeur Web
      </h2>
      <a
        className="mb-4 rounded bg-third p-4 text-white sm:mb-8 sm:p-8 sm:text-xl"
        href="#contact"
      >
        Me contacter
      </a>

      <a
        className="rounded  bg-third p-4 text-white sm:p-8  sm:text-xl"
        href="https://houroux.github.io/my-portfolio/CV_2023-08-03_Arthur_TROVATO.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
        Mon CV
      </a>
    </div>
  );
}
