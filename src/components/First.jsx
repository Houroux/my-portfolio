import React from "react";

export default function First() {
  return (
    <div
      id="First"
      className="flex flex-col items-center justify-center pt-12  "
    >
      <h2 className=" mb-24 w-full cursor-default bg-orange-200 px-10 py-8 text-center text-2xl">
        DEVELOPPEUR WEB
      </h2>
      <a
        className="mb-4 rounded-full border-2 border-zinc-800 bg-green-200 p-4 text-xl"
        href="#"
      >
        ME CONTACTER
      </a>

      <a
        className="rounded-full  border-2 border-zinc-800 bg-green-200 p-4 text-xl"
        href="https://github.com/Houroux/my-portfolio/blob/master/public/CV_2023-08-03_Arthur_TROVATO.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
        MON CV
      </a>
    </div>
  );
}
