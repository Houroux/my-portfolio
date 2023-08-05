import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

{
  /* <img src={process.env.PUBLIC_URL + pictures[0]} alt="" /> */
}

export default function Projet({ cover, title, pictures, description, tools }) {
  return (
    <div className="flex w-full flex-col items-center rounded bg-projectbg p-4">
      <Carousel infiniteLoop={true} className="w-full">
        {pictures.map((picture) => (
          <div>
            <img src={process.env.PUBLIC_URL + picture} />
          </div>
        ))}
      </Carousel>
      <h4 className="mb-4 text-center text-xl">{title}</h4>
      <p className="mb-4 text-justify">{description}</p>
      <h4 className="mb-4 mt-4 text-lg">Outils utilisés</h4>
      <div className="tools flex flex-wrap justify-center gap-4">
        {tools.map((tool) => (
          <p>{tool}</p>
        ))}
      </div>
    </div>
  );
}
