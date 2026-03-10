import './App.css'
import StaggeredMenu from './components/StaggeredMenu'
import Footer from './components/Footer'

const menuItems = [
  { label: 'Home', ariaLabel: 'Ir a Home', link: '#home' },
  { label: 'Nosotros', ariaLabel: 'Ir a Nosotros', link: '#nosotros' },
  { label: 'Proyectos', ariaLabel: 'Ir a Proyectos', link: '#proyectos' },
  { label: 'Contacto', ariaLabel: 'Ir a Contacto', link: '#contacto' },
]

function App() {
  return (
    <>
      <main className="hero-container" id="home">
        <video
          className="hero-video"
          autoPlay
          loop
          muted
          playsInline
          src="/video-inicio.mp4"
        />

        <div className="hero-overlay" />

        <div className="logo-container">
          <img src="/logo-veyor.svg" alt="Veyor logo" />
        </div>

        <div className="hero-center">
          <h1 className="hero-title">VEYOR</h1>
          <p className="hero-subtitle">Desarrolladora inmobiliaria</p>
        </div>

        <div className="menu-layer">
          <StaggeredMenu
            items={menuItems}
            socialItems={[]}
            displaySocials={false}
            displayItemNumbering={false}
            menuButtonColor="#ffffff"
            openMenuButtonColor="#111111"
            changeMenuColorOnOpen={true}
            accentColor="#8f8f8f"
            colors={['#d9d9d9', '#ffffff']}
            closeOnClickAway={true}
          />
        </div>
      </main>

      <section id="nosotros"></section>
      <section id="proyectos"></section>
      <section id="contacto"></section>

      <Footer />
    </>
  )
}

export default App