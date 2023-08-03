import React from "react";

export default function Header() {
  return (
    <div>
      <nav className="flex flex-row-reverse flex-wrap items-center justify-between  p-6">
        <div className="mr-5 flex flex-shrink-0  items-center text-gray-100">
          <span className="ml-6  cursor-default text-xl font-semibold sm:text-base">
            PORTFOLIO D'ARTHUR TROVATO
          </span>
        </div>
        <div className="block lg:hidden">
          <button className="flex  items-center  rounded border border-gray-400 px-3 py-2 text-gray-100 hover:border-white hover:text-gray-300">
            <svg
              className="h-3 w-3 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div className="block w-full flex-grow flex-row-reverse  lg:flex lg:w-auto lg:items-center">
          <div className="  text-sm">
            <a
              href="#responsive-header"
              className="mr-4 mt-4 block   text-gray-100 hover:text-gray-300 lg:mt-0 lg:inline-block"
            >
              PRESENTATION
            </a>
            <a
              href="#responsive-header"
              className="mr-4 mt-4 block text-gray-100 hover:text-gray-300 lg:mt-0 lg:inline-block"
            >
              COMPETENCES
            </a>
            <a
              href="#responsive-header"
              className="mr-4 mt-4 block text-gray-100 hover:text-gray-300 lg:mt-0 lg:inline-block"
            >
              PORTFOLIO
            </a>
            <a
              href="#responsive-header"
              className="mr-4 mt-4 block text-gray-100 hover:text-gray-300 lg:mt-0 lg:inline-block"
            >
              A PROPOS
            </a>
            <a
              href="#responsive-header"
              className="mt-4 block text-gray-100 hover:text-gray-300 lg:mt-0 lg:inline-block"
            >
              CONTACT
            </a>
          </div>
          <div>
            <a
              href="#"
              className="mr-6 mt-4 inline-block rounded border border-white px-4 py-2 text-sm leading-none text-white hover:border-transparent hover:bg-white hover:text-gray-800 lg:mt-0"
            >
              Télécharger le CV
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}
