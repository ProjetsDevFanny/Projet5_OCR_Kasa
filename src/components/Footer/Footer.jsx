import React from 'react'
import './footer.scss'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__logo-footer">
          <Link to="/">Logo</Link>
        </div>
      </div>
      <p className="footer__p">© 2025 Kasa. All rights reserved</p>
    </footer>
  )
}

export default Footer;