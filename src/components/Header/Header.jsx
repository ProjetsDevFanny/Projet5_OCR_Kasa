/**
 * @file Header.jsx
 * @description Composant Header affiché sur toutes les pages avec le logo et la navigation principale.
 *              Gère le menu de navigation avec liens actifs vers Accueil et À propos.
 * @author Simon Fanny
 * @date 16/10/2025
 * @project Kasa - Application de location immobilière - OpenClassrooms
 * 
 * ===============================================================================
 */

import React from 'react'
import './header.scss'
import { NavLink } from 'react-router-dom'
import logoRed from '../../assets/LOGO_red.png'

function Header() {
  return (
    <header className="header">
      <div className="header__container">
        {/* Logo */}
        <div className="header__logo">          
          <NavLink to="/" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")} >
            <img src={logoRed} alt="Logo-Kasa-red" />
          </NavLink>
        </div>
        <nav className="header__nav">
          <NavLink to="/" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")} >Accueil</NavLink>
          <NavLink to="/about" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")} >À propos</NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;