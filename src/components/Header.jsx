import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Header() {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <div className="sticky top-0 h-20 w-screen">
      <div className="m-auto flex flex-col items-center justify-between gap-5 pt-4 text-gray-300">
        <div className="itemc flex h-9 w-full justify-between px-9">
          <h1 className="self-center text-3xl">ARTHUR TROVATO</h1>
          <button onClick={() => setIsOpened(!isOpened)}>
            <FontAwesomeIcon
              className="h-full w-full"
              icon="fa-solid fa-square-caret-down"
            />
          </button>
        </div>
        {isOpened && (
          <nav className="flex w-full flex-col justify-center transition-all">
            <a className="w-full border-t py-1 text-center" href="#">
              PRESENTATION
            </a>
            <a className="w-full border-t py-1 text-center" href="#">
              COMPETENCES
            </a>
            <a className="w-full border-t py-1 text-center" href="#">
              PORTFOLIO
            </a>
            <a className="w-full border-t py-1 text-center" href="#">
              A PROPOS
            </a>
            <a className="w-full border-t py-1 text-center" href="#">
              CONTACT
            </a>
            <a className="w-full border-y border-t py-1 text-center" href="#">
              TELECHARGER LE CV
            </a>
          </nav>
        )}
      </div>
    </div>
  );
}
