import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Header() {
  const [isOpened, setIsOpened] = useState(false);
  const navLinkClassName =
    "w-full pr-8 border border-white bg-second text-right py-1 sm:text-xl sm:py-2 ";
  return (
    <div className="fixed top-0 z-10 w-screen bg-second xl:border-b xl:border-black">
      <div className="m-auto flex h-16 w-full flex-col sm:items-end xl:max-w-screen-xl ">
        <div className="z-20 flex h-16 w-full items-center justify-between bg-second px-6 py-4">
          <a
            href="#first"
            className="self-center text-3xl [text-shadow:_0_0_3px_rgb(255_255_255_/_20%)]  sm:text-4xl"
          >
            Arthur TROVATO
          </a>
          <div className="flex h-full items-center gap-4 sm:gap-10">
            <a
              href="tel:+33760434390"
              className="relative left-2 flex h-6 items-center justify-center sm:hidden"
            >
              <FontAwesomeIcon className="h-full" icon="fa-solid fa-phone" />
            </a>{" "}
            <a
              href="mailto:arthurtrovato@gmail.com"
              className="relative left-2 hidden h-8 items-center justify-center sm:flex "
            >
              <FontAwesomeIcon
                className="h-full"
                icon="fa-regular fa-envelope"
              />
            </a>
            <button
              className="relative left-2 flex h-7 items-center justify-center sm:h-8"
              onClick={() => setIsOpened(!isOpened)}
            >
              <FontAwesomeIcon className="h-full" icon="fa-solid fa-bars" />
            </button>
          </div>
        </div>

        <nav
          className={`${
            isOpened ? "transform-none" : "-translate-y-80"
          } flex w-full flex-col justify-center border border-white text-lg transition-all duration-500 [text-shadow:_0_0_2px_rgb(255_255_255_/_20%)]`}
        >
          <a
            onClick={() => setIsOpened(!isOpened)}
            className={`${navLinkClassName} border-t-0`}
            href="#presentation"
          >
            Présentation
          </a>
          <a
            onClick={() => setIsOpened(!isOpened)}
            className={`${navLinkClassName}`}
            href="#competences"
          >
            Compétences
          </a>
          <a
            onClick={() => setIsOpened(!isOpened)}
            className={`${navLinkClassName}`}
            href="#portfolio"
          >
            Portfolio
          </a>

          <a
            onClick={() => setIsOpened(!isOpened)}
            className={`${navLinkClassName}`}
            href="#contact"
          >
            Contact
          </a>
          <a
            onClick={() => setIsOpened(!isOpened)}
            className={`${navLinkClassName}`}
            href="#localisation"
          >
            Ma localisation
          </a>
          <a
            onClick={() => setIsOpened(!isOpened)}
            className={`${navLinkClassName}`}
            href="https://houroux.github.io/my-portfolio/CV_2023-08-03_Arthur_TROVATO.pdf"
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
