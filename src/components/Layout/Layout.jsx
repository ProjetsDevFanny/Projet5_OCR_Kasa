/**
 * @file Layout.jsx
 * @description Composant de mise en page principal contenant Header, Footer et zone de contenu.
 *              Utilise le composant Outlet de React Router pour afficher les pages enfants.
 * @author Simon Fanny
 * @date 16/10/2025
 * @project Kasa - Application de location immobilière - OpenClassrooms
 * 
 * ===============================================================================
 */

import { Outlet } from 'react-router-dom'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import './layout.scss'

function Layout() {
  return (
    <div className="layout">
      <Header />
      <main className="layout__main-container">
        <Outlet /> {/* Ici s'afficheront le contenu des pages enfants */}
      </main>
      <Footer />
    </div>
  )
}

export default Layout