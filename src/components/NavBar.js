import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

export default function NavBar() {
  return (
    <header>
      <div>
        <nav>
          <NavLink to="/" exact>
            Sundberg
          </NavLink>
          <NavLink to="/post">Blog Posts</NavLink>
          <NavLink to="/project">Projects</NavLink>
          <NavLink to="/about">About me</NavLink>
        </nav>
        <div>
          <SocialIcon
            url="https://www.linkedin.com/in/emil-sundberg-23252533/"
            target="_blank"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://github.com/emilsundberg-h"
            target="_blank"
            style={{ height: 35, width: 35 }}
          />
        </div>
      </div>
    </header>
  );
}
