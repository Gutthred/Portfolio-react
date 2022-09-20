import React from "react";
import "./NavBar.css";
import { AiOutlineHome } from "react-icons/ai";
import { FiUser, FiBookOpen } from "react-icons/fi";
import { IconContext } from "react-icons";
import { useState } from "react";

const navBar = () => {
  const [activeNavBar, setActiveNavBar] = useState('#header');
  return (
    <nav className="navBar__icons">
      <IconContext.Provider value={{ size: 18 }}>
        <>
          <a href="#header" onClick={() => setActiveNavBar('#header')} className={activeNavBar === '#header' ? 'active' : ''}>
            <AiOutlineHome />
          </a>
          <a href="#about" onClick={() => setActiveNavBar('#about')} className={activeNavBar === '#about' ? 'active' : ''}>
            <FiUser />
          </a>
          <a href="#projects" onClick={() => setActiveNavBar('#projects')} className={activeNavBar === '#projects' ? 'active' : ''}>
            <FiBookOpen />
          </a>
        </>
      </IconContext.Provider>
    </nav>
  );
  
};

export default navBar;
