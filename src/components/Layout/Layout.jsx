
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import './Layout.scss'

function Layout({children}) {
    return (
        <div className="layout">
            <Header />
            <main className="layout_main">
                {children} {/* Contenu central dynamique = pages */}
            </main>
            <Footer />
        </div>
    )
}

export default Layout