import React from "react";
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

const liClassName = "flex flex-col items-center";
const iconClassName = "h-10 sm:h-12 drop-shadow";
const label = "sm:text-xl";

export default function Competences() {
  return (
    <div
      id="competences"
      className="flex flex-col items-center  bg-inherit py-12 xl:m-auto xl:max-w-screen-xl"
    >
      <h2 className=" text-2xl sm:text-4xl">Compétences</h2>
      <div className="flex flex-col items-center xl:flex-row xl:flex-wrap xl:justify-center">
        <div className="flex items-center pt-8 xl:mx-32">
          <div className="flex flex-col items-center">
            <h3 className="text-lg sm:text-3xl">Front-end</h3>
            <ul className="grid grid-cols-3 gap-4 pt-4">
              <li className={`${liClassName}`}>
                <FontAwesomeIcon
                  className={`${iconClassName}`}
                  icon="fa-brands fa-html5"
                  style={{ color: "#e54d26" }}
                />
                <p className={`${label}`}>HTML5</p>
              </li>
              <li className={`${liClassName}`}>
                <FontAwesomeIcon
                  className={`${iconClassName}`}
                  icon="fa-brands fa-css3-alt"
                  style={{ color: "#379ad4" }}
                />
                <p className={`${label}`}>CSS3</p>
              </li>
              <li className={`${liClassName}`}>
                <FontAwesomeIcon
                  className={`${iconClassName}`}
                  icon="fa-brands fa-square-js"
                  style={{ color: "#fed54a" }}
                />
                <p className={`${label}`}>JS</p>
              </li>
              <li className={`${liClassName}`}>
                <FontAwesomeIcon
                  className={`${iconClassName}`}
                  icon="fa-brands fa-react"
                  style={{ color: "#61dbfb" }}
                />
                <p className={`${label}`}>ReactJS</p>
              </li>
              <li className={`${liClassName}`}>
                <FontAwesomeIcon
                  className={`${iconClassName}`}
                  icon="fa-brands fa-sass"
                  style={{ color: "#ce679a" }}
                />
                <p className={`${label}`}>Sass</p>
              </li>
              <li className={`${liClassName}`}>
                <img
                  src={Tailwind}
                  className={`${iconClassName}`}
                  alt="Tailwind"
                />
                <p className={`${label}`}>Tailwind</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col items-center pt-8 sm:my-12 xl:mx-32">
          <h3 className="text-lg sm:text-3xl">Back-end</h3>
          <ul className="grid grid-cols-2 gap-4 pt-4">
            <li className={`${liClassName}`}>
              <FontAwesomeIcon
                className={`${iconClassName}`}
                icon="fa-brands fa-square-js"
                style={{ color: "#fed54a" }}
              />
              <p className={`${label}`}>JS</p>
            </li>
            <li className={`${liClassName}`}>
              <FontAwesomeIcon
                className={`${iconClassName}`}
                icon="fa-brands fa-node-js"
                style={{ color: "#539e42" }}
              />
              <p className={`${label}`}>NodeJS</p>
            </li>
            <li className={`${liClassName}`}>
              <img
                src={ExpressJS}
                className={`${iconClassName}`}
                alt="ExpressJS"
              />
              <p className={`${label}`}>ExpressJS</p>
            </li>
            <li className={`${liClassName}`}>
              <img src={MangoDB} className={`${iconClassName}`} alt="MangoDB" />
              <p className={`${label}`}>MangoDB</p>
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-center pt-8 xl:mx-32">
          <h3 className="text-lg sm:text-3xl">Outils</h3>
          <ul className="grid grid-cols-4 gap-4 pt-4">
            <li className={`${liClassName}`}>
              <img
                src={LightHouse}
                className={`${iconClassName}`}
                alt="Lighthouse"
              />
              <p className={`${label}`}>LightHouse</p>
            </li>
            <li className={`${liClassName}`}>
              <img src={Wave} className={`${iconClassName}`} alt="Wave" />
              <p className={`${label}`}>Wave</p>
            </li>
            <li className={`${liClassName}`}>
              <FontAwesomeIcon
                className={`${iconClassName}`}
                icon="fa-brands fa-npm"
                style={{ color: "#cc3534" }}
              />
              <p className={`${label}`}>npm</p>
            </li>
            <li className={`${liClassName}`}>
              <FontAwesomeIcon
                className={`${iconClassName}`}
                icon="fa-brands fa-yarn"
                style={{ color: "#2c8ebb" }}
              />
              <p className={`${label}`}>yarn</p>
            </li>
            <li className={`${liClassName}`}>
              <FontAwesomeIcon
                className={`${iconClassName}`}
                icon="fa-brands fa-git-alt"
                style={{ color: "#f05030" }}
              />
              <p className={`${label}`}>git</p>
            </li>
            <li className={`${liClassName}`}>
              <FontAwesomeIcon
                className={`${iconClassName}`}
                icon="fa-brands fa-github"
                style={{ color: "#000000" }}
              />
              <p className={`${label}`}>Github</p>
            </li>
            <li className={`${liClassName}`}>
              <img src={VSCode} className={`${iconClassName}`} alt="VSCode" />
              <p className={`${label}`}>VSCode</p>
            </li>{" "}
            <li className={`${liClassName}`}>
              <img src={Notion} className={`${iconClassName}`} alt="Notion" />
              <p className={`${label}`}>Notion</p>
            </li>{" "}
            <li className={`${liClassName}`}>
              <img
                src={DailyDev}
                className={`${iconClassName}`}
                alt="DailyDev"
              />
              <p className={`${label}`}>DailyDev</p>
            </li>
            <li className={`${liClassName}`}>
              <img src={Word} className={`${iconClassName}`} alt="Word" />
              <p className={`${label}`}>Word</p>
            </li>{" "}
            <li className={`${liClassName}`}>
              <img
                src={Powerpoint}
                className={`${iconClassName}`}
                alt="Powerpoint"
              />
              <p className={`${label}`}>Powerpoint</p>
            </li>{" "}
            <li className={`${liClassName}`}>
              <img src={Excel} className={`${iconClassName}`} alt="Excel" />
              <p className={`${label}`}>Excel</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
