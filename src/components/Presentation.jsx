import React from "react";
import pdp from "../img/IMG_2473.jpg";

export default function Presentation() {
  return (
    <div
      id="presentation"
      className="mt-20 flex flex-col items-center gap-8 bg-second px-8 py-12  text-lg sm:px-40  sm:text-xl"
    >
      <img
        src={pdp}
        className=" h-36 w-36 rounded-full object-cover "
        alt="Photo d'Arthur"
      />
      <p className="">Arthur Trovato</p>
      <p className="">23 ans</p>
      <p className="text-base sm:text-lg">
        Après un BAC+4 dans le management industriel, je me suis réorienté dans
        le développement web.
        <br />
        Avec Openclassrooms, j'ai pu travailler sur des projets divers et gagner
        en compétences sur toutes les phases de développement d'un projet.
      </p>
    </div>
  );
}
