import React from "react";
import Map from "../img/brave_PMr33Wy1UI.png";

export default function Localisation() {
  return (
    <div
      id="localisation"
      className="flex flex-col items-center gap-4 bg-second px-8 py-16"
    >
      <h2 className="mb-8 text-2xl sm:text-4xl">Ma localisation</h2>
      <p className="text-xl sm:text-2xl">Metz</p>
      <img className="rounded-3xl" src={Map} alt="Carte" />
    </div>
  );
}
