import React from 'react'
import './header.scss'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className="header">
      <div className="header__container">
        {/* Logo */}
        <div className="header__logo">
          <Link to="/">Logo</Link>
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