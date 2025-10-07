
import { Outlet } from 'react-router-dom'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import './layout.scss'

function Layout() {
  return (
    <div className="layout">
      <Header />
      <main className="layout__main-container">
        <Outlet /> {/* Le contenu des pages s'affiche ici */}
      </main>
      <Footer />
    </div>
  )
}

export default Layout