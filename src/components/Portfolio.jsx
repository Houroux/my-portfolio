import React, { useState, useEffect } from "react";
import Project from "./Projet";

export default function Portfolio() {
  const [projets, setProjects] = useState([]);
  const getProjects = () => {
    fetch(`${process.env.PUBLIC_URL + "/data.json"}`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        setProjects(myJson);
      });
  };
  useEffect(() => {
    getProjects();
  }, []);
  console.log(projets);
  return (
    <div id="portfolio" className="flex flex-col items-center bg-second py-12">
      <h2 className="text-4xl">Portfolio</h2>
      <div className="cardsContainer sm: flex w-full flex-col flex-wrap p-8 sm:flex-row sm:justify-center sm:px-0">
        {projets.map((project) => (
          <Project
            key={project.title}
            title={project.title}
            pictures={project.pictures}
            description={project.description}
            tools={project.tools}
            github={project.github}
          ></Project>
        ))}
      </div>
    </div>
  );
}
