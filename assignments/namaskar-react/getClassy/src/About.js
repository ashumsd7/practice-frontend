import React from "react";
import { Outlet } from "react-router-dom";

function About() {
  return (
    <div>
      About
      <h2>Chilren will go heer</h2>
      <Outlet/>
    </div>
  );
}

export default About;
