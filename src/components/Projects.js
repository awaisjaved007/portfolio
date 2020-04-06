import React, { Component } from "react";
import PROJECTS from "../data/Project";

const Project = (props) => {
  const { title, description, link, image } = props.project;
  return (
    <div style={{ display: "inline-block", margin: 30 }}>
      <h3>{title}</h3>
      <img src={image} alt="profile" style={{ height: 120, width: 200 }} />
      <p>{description}</p>
      <a href={link}>{link}</a>
    </div>
  );
};

const Projects = () => (
  <div>
    <h1>Highlighted Projects</h1>
    {PROJECTS.map((PROJECT) => (
      <Project key={PROJECT.id} project={PROJECT} />
    ))}
  </div>
);

export default Projects;
