import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Header() {
  const [isOpened, setIsOpened] = useState(false);
  const navLinkClassName =
    "w-full border-t border-zinc-800 bg-orange-200 py-1 text-center";
  return (
    <div className="sticky  top-0 h-20 w-screen ">
      <div className="m-auto flex flex-col bg-orange-200 ">
        <div className="my-4 flex  h-9 w-full justify-between px-9">
          <h1 className="self-center text-3xl font-thin [text-shadow:_0_0_3px_rgb(255_255_255_/_20%)]">
            ARTHUR TROVATO
          </h1>
          <button
            className="relative left-2 h-full w-9"
            onClick={() => setIsOpened(!isOpened)}
          >
            <FontAwesomeIcon
              className="h-5/6 pt-1"
              icon="fa-solid fa-square-caret-down"
            />
          </button>
        </div>
        <nav
          className={`${
            isOpened ? "flex" : "hidden"
          } flex flex-col justify-center text-lg transition-all duration-300
          [text-shadow:_0_0_2px_rgb(255_255_255_/_20%)]`}
        >
          <a
            onClick={() => setIsOpened(!isOpened)}
            className={`${navLinkClassName}`}
            href="#first"
          >
            PRESENTATION
          </a>
          <a
            onClick={() => setIsOpened(!isOpened)}
            className={`${navLinkClassName}`}
            href="#"
          >
            COMPETENCES
          </a>
          <a
            onClick={() => setIsOpened(!isOpened)}
            className={`${navLinkClassName}`}
            href="#"
          >
            PORTFOLIO
          </a>
          <a
            onClick={() => setIsOpened(!isOpened)}
            className={`${navLinkClassName}`}
            href="#"
          >
            A PROPOS
          </a>
          <a
            onClick={() => setIsOpened(!isOpened)}
            className={`${navLinkClassName}`}
            href="#"
          >
            CONTACT
          </a>
          <a
            onClick={() => setIsOpened(!isOpened)}
            className={`${navLinkClassName}`}
            href="https://github.com/Houroux/my-portfolio/blob/master/public/CV_2023-08-03_Arthur_TROVATO.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            TELECHARGER LE CV
          </a>
        </nav>
      </div>
    </div>
  );
}
