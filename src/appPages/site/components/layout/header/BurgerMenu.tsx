import React, { useState } from "react";
import "./BurgerMenu.css";
import { useNavigate } from "react-router-dom";
import LogOut from "../../../../auth/components/pages/LogOut";

const BurgerMenu: React.FC = () => {
    const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div
        className={`burger-menu ${isOpen ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <div></div>
        <div></div>
        <div></div>
      </div>
      <nav className={`nav-menu ${isOpen ? "active" : ""}`}>
        <ul className="menu_active">
          <li>
            <p onClick={() => navigate('/')}>Home</p>
          </li>
          <li>
            <p onClick={() => navigate('/auth/sign-up')}>Sign Up</p>
          </li>
          <li>
            <p onClick={() => navigate('/auth/sign-in')}>Sign In</p>
          </li>
          <li>
            <LogOut/>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default BurgerMenu;
