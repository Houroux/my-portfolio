import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Contact() {
  return (
    <div id="contact" className="flex  flex-col items-center gap-4 py-12 ">
      <h2 className="mb-12 text-2xl">Contact</h2>
      <a
        href="mailto:arthurtrovato@gmail.com"
        className="rounded  bg-third p-4  text-white"
      ></a>
      <a href="tel:+33760434390" className="rounded  bg-third p-4  text-white">
        07 60 43 43 90
      </a>
      <a
        className="rounded  bg-third p-4  text-white"
        href="https://houroux.github.io/my-portfolio/CV_2023-08-03_Arthur_TROVATO.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
        Mon CV
      </a>
    </div>
  );
}
