import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Header() {
  const [isOpened, setIsOpened] = useState(false);
  const navLinkClassName =
    "w-full border-t border-zinc-800 bg-second py-1 text-center";
  return (
    <div className="fixed top-0 z-10 w-screen">
      <div className="m-auto flex h-16 w-full flex-col bg-second ">
        <div className="z-20 flex h-16 w-full justify-between bg-second px-6 py-4">
          <h1 className="self-center text-3xl  [text-shadow:_0_0_3px_rgb(255_255_255_/_20%)]">
            Arthur Trovato
          </h1>
          <button
            className="relative left-2 h-full w-9"
            onClick={() => setIsOpened(!isOpened)}
          >
            <FontAwesomeIcon className="h-5/6 pt-1" icon="fa-solid fa-bars" />
          </button>
        </div>

        <nav
          className={`${
            isOpened ? "transform-none" : "-translate-y-80"
          } flex flex-col justify-center text-lg transition-all duration-500
          [text-shadow:_0_0_2px_rgb(255_255_255_/_20%)]`}
        >
          <a
            onClick={() => setIsOpened(!isOpened)}
            className={`${navLinkClassName}`}
            href="#first"
          >
            Présentation
          </a>
          <a
            onClick={() => setIsOpened(!isOpened)}
            className={`${navLinkClassName}`}
            href="#"
          >
            Compétences
          </a>
          <a
            onClick={() => setIsOpened(!isOpened)}
            className={`${navLinkClassName}`}
            href="#"
          >
            Portfolio
          </a>
          <a
            onClick={() => setIsOpened(!isOpened)}
            className={`${navLinkClassName}`}
            href="#"
          >
            A propos
          </a>
          <a
            onClick={() => setIsOpened(!isOpened)}
            className={`${navLinkClassName}`}
            href="#"
          >
            Contact
          </a>
          <a
            onClick={() => setIsOpened(!isOpened)}
            className={`${navLinkClassName} border-b`}
            href="https://github.com/Houroux/my-portfolio/blob/master/public/CV_2023-08-03_Arthur_TROVATO.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Télécharger le CV
          </a>
        </nav>
      </div>
    </div>
  );
}
