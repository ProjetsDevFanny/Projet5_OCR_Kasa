import React from 'react'
import './header.scss'
import { Link } from 'react-router-dom'
import logoRed from '../../assets/LOGO_red.png'

function Header() {
  return (
    <header className="header">
      <div className="header__container">
        {/* Logo */}
        <div className="header__logo">
          <Link to="/">
            <img src={logoRed} alt="Logo-Kasa-red" />
          </Link>
        </div>
        <nav className="header__nav">
          <Link to="/">Accueil</Link>
          <Link to="/">À propos</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;