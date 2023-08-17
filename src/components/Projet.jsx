import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Tailwind from "..//img/89711240-4172a200-d989-11ea-8d51-4aaf922fa407.png";
import ExpressJS from "../img/png-transparent-express-js-node-js-javascript-mongodb-node-js-text-trademark-logo-removebg-preview.png";
import MangoDB from "../img/ext-553-removebg-preview.png";
import VSCode from "../img/vscode.png";
import LightHouse from "../img/Google-Lighthouse-Logo.png";
import Wave from "../img/wave.png";
import Notion from "../img/notion.png";
import DailyDev from "../img/daily-dev-icon-logo-F2FF3407F0-seeklogo.com.png";
import Word from "../img/word-logo-0.png";
import Powerpoint from "../img/microsoft-powerpoint-logo-0.png";
import Excel from "../img/excel-logo-0.png";

export default function Projet({
  title,
  pictures,
  description,
  tools,
  github,
  problematiques,
}) {
  const iconClassName = "h-12 drop-shadow";
  const liClassName = "flex flex-col items-center ";
  const AppLogo = {
    Html: (
      <FontAwesomeIcon
        className={`${iconClassName}`}
        icon="fa-brands fa-html5"
        style={{ color: "#e54d26" }}
      />
    ),
    Css: (
      <FontAwesomeIcon
        className={`${iconClassName}`}
        icon="fa-brands fa-css3-alt"
        style={{ color: "#379ad4" }}
      />
    ),
    Javascript: (
      <FontAwesomeIcon
        className={`${iconClassName} `}
        icon="fa-brands fa-square-js"
        style={{ color: "#fed54a" }}
      />
    ),
    React: (
      <FontAwesomeIcon
        className={`${iconClassName}`}
        icon="fa-brands fa-react"
        style={{ color: "#61dbfb" }}
      />
    ),
    Sass: (
      <FontAwesomeIcon
        className={`${iconClassName}`}
        icon="fa-brands fa-sass"
        style={{ color: "#ce679a" }}
      />
    ),
    VSCode: <img src={VSCode} className={`${iconClassName}`} alt="VSCode" />,
    GitHub: (
      <FontAwesomeIcon
        className={`${iconClassName}`}
        icon="fa-brands fa-github"
        style={{ color: "#000000" }}
      />
    ),
    NodeJS: (
      <FontAwesomeIcon
        className={`${iconClassName}`}
        icon="fa-brands fa-node-js"
        style={{ color: "#539e42" }}
      />
    ),
    ExpressJS: (
      <img src={ExpressJS} className={`${iconClassName}`} alt="ExpressJS" />
    ),
    MangoDB: <img src={MangoDB} className={`${iconClassName}`} alt="MangoDB" />,
    RichSnippet: (
      <FontAwesomeIcon
        className={`${iconClassName}`}
        icon="fa-brands fa-google"
        style={{ color: "#4d646f" }}
      />
    ),
    LightHouse: (
      <img src={LightHouse} className={`${iconClassName}`} alt="Lighthouse" />
    ),
    Wave: <img src={Wave} className={`${iconClassName}`} alt="Wave" />,
    Notion: <img src={Notion} className={`${iconClassName}`} alt="Notion" />,
    DailyDev: (
      <img src={DailyDev} className={`${iconClassName}`} alt="DailyDev" />
    ),
    Word: <img src={Word} className={`${iconClassName}`} alt="Word" />,
    Powerpoint: (
      <img src={Powerpoint} className={`${iconClassName}`} alt="Powerpoint" />
    ),
    Excel: <img src={Excel} className={`${iconClassName}`} alt="Excel" />,
  };
  return (
    <div className="my-4 flex w-full flex-col items-center justify-between rounded bg-projectbg p-4 sm:mx-4 sm:w-5/12 ">
      <Carousel infiniteLoop={true} className="w-full">
        {pictures.map((picture) => (
          <div key={picture}>
            <img src={process.env.PUBLIC_URL + picture} />
          </div>
        ))}
      </Carousel>
      <h4 key={title} className="mb-4 text-center text-xl sm:text-2xl">
        {title}
      </h4>
      <p key={description} className="mb-4 sm:text-lg">
        {description}
      </p>
      {problematiques && (
        <div className="">
          <h4>Problématiques rencontrées</h4>
          <p>{problematiques}</p>
        </div>
      )}

      <div className="">
        <h4 className="mb-4 mt-4 text-center text-lg sm:text-xl">
          Outils utilisés
        </h4>
        <ul
          key={Math.random}
          className="tools flex flex-wrap justify-center gap-4"
        >
          {tools.map((tool) => (
            <li key={Math.random} className={`${liClassName}`}>
              {AppLogo[tool]}
              <p className="sm:text-lg">{tool}</p>
            </li>
          ))}
        </ul>
      </div>

      {github && (
        <a
          className="mt-4 flex items-center gap-1 rounded bg-third px-3 py-1 text-white"
          href={github}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon="fa-solid fa-link" />
          <p>Github</p>
        </a>
      )}
    </div>
  );
}
