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
    <div className="flex flex-col items-center bg-second py-12">
      <h2 className="text-2xl">Portfolio</h2>
      <div className="cardsContainer flex w-full flex-col p-8">
        {projets.map((project) => (
          <Project
            key={project.title}
            title={project.title}
            pictures={project.pictures}
            description={project.description}
            tools={project.tools}
          ></Project>
        ))}
      </div>
    </div>
  );
}
