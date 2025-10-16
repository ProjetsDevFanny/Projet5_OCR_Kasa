/**
 * @file Footer.jsx
 * @description Composant Footer affiché sur toutes les pages de l'application.
 *              Contient le logo Kasa en blanc et les informations de copyright.
 * @author Simon Fanny
 * @date 16/10/2025
 * @project Kasa - Application de location immobilière - OpenClassrooms
 * 
 * ===============================================================================
 */

import React from 'react'
import './footer.scss'
import { Link } from 'react-router-dom'
import logoWhite from '../../assets/LOGO_white.png'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__logo-footer">
          <Link to="/">
            <img src={logoWhite} alt="Logo-Kasa-white" />
          </Link>
        </div>
      </div>
      <p className="footer__p">© 2020 Kasa. All rights reserved</p>
    </footer>
  )
}

export default Footer;