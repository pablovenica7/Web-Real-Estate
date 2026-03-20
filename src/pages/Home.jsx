import { Link } from 'react-router-dom'
import StaggeredMenu from '../components/StaggeredMenu'
import BlurText from '../components/BlurText'
import SplitText from '../components/SplitText'

const menuItems = [
  { label: 'Home', link: '/', icon: '/icono-home.svg' },
  { label: 'Nosotros', link: '/nosotros', icon: '/icono-nosotros.svg' },
  { label: 'Contacto', link: '/contacto', icon: '/icono-contacto.svg' },
]

function Home() {
  return (
    <main className="hero-container">
      <video
        className="hero-video"
        autoPlay
        loop
        muted
        playsInline
        src="/video-inicio.mp4"
      />

      <div className="hero-overlay" />

      {/* LOGO CON LINK */}
      <div className="logo-container">
        <Link to="/">
          <img src="/logo-veyor.svg" alt="Veyor logo" />
        </Link>
      </div>

      <div className="hero-center">
        <BlurText
          text="VEYOR"
          delay={120}
          animateBy="chars"
          direction="top"
          className="hero-title"
          as="h1"
        />

        <SplitText
          text="Desarrolladora Inmobiliaria"
          className="hero-subtitle"
          delay={45}
          duration={0.9}
          ease="power3.out"
          from={{ opacity: 0, y: 18 }}
          to={{ opacity: 1, y: 0 }}
          textAlign="center"
          tag="p"
        />
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
          accentColor="#ff7a00"
          colors={['#d9d9d9', '#ffffff']}
          closeOnClickAway={true}
        />
      </div>
    </main>
  )
}

export default Home