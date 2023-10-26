import React from "react";
import pdp from "../img/IMG_2473.png";

export default function Presentation() {
  return (
    <div className="">
      <div
        id="presentation"
        className="m-auto mt-16 flex flex-col items-center gap-8 px-8 py-12 text-lg  sm:px-40 sm:text-xl  xl:max-w-screen-xl"
      >
        <img
          src={pdp}
          className=" h-36 w-36 rounded-full object-cover "
          alt="Photo d'Arthur"
        />
        <p className="">Arthur TROVATO</p>
        <p className="">23 ans</p>
        <p className="text-base sm:text-lg">
          Je suis un développeur web passionné et polyvalent, fort d'une solide
          formation en développement web et d'une expérience en gestion de
          projet industriel.
          <br />
          J'apporte des compétences front-end et back-end en JavaScript,
          ReactJS, NodeJS et plus encore. Mon désir d'apprendre et de contribuer
          activement à des projets passionnants fait de moi un atout pour votre
          équipe.
        </p>
      </div>
    </div>
  );
}
