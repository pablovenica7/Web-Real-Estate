import './App.css'
import StaggeredMenu from './components/StaggeredMenu'
import Footer from './components/Footer'
import SplitText from './components/SplitText'
import BlurText from './components/BlurText'

const menuItems = [
  {
    label: 'Home',
    ariaLabel: 'Ir a Home',
    link: '#home',
    icon: '/icono-home.svg',
  },
  {
    label: 'Nosotros',
    ariaLabel: 'Ir a Nosotros',
    link: '#nosotros',
    icon: '/icono-nosotros.svg',
  },
  {
    label: 'Proyectos',
    ariaLabel: 'Ir a Proyectos',
    link: '#proyectos',
    icon: '/icono-proyectos.svg',
  },
  {
    label: 'Contacto',
    ariaLabel: 'Ir a Contacto',
    link: '#contacto',
    icon: '/icono-contacto.svg',
  },
]

function App() {
  const handleSubtitleComplete = () => {
    console.log('La animación del subtítulo terminó')
  }

  const handleTitleComplete = () => {
    console.log('La animación del título terminó')
  }

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
          <BlurText
            text="VEYOR"
            delay={120}
            animateBy="chars"
            direction="top"
            onAnimationComplete={handleTitleComplete}
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
            onLetterAnimationComplete={handleSubtitleComplete}
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

      <section id="nosotros"></section>
      <section id="proyectos"></section>
      <section id="contacto"></section>

      <Footer />
    </>
  )
}

export default App
