import { Link } from 'react-router-dom'
import StaggeredMenu from '../components/StaggeredMenu'

const menuItems = [
  { label: 'Home', link: '/', icon: '/icono-home.svg' },
  { label: 'Nosotros', link: '/nosotros', icon: '/icono-nosotros.svg' },
  { label: 'Contacto', link: '/contacto', icon: '/icono-contacto.svg' },
]

function Contacto() {
  return (
    <main className="contacto-page">
      <div className="contacto-background" />

      <div className="logo-container logo-container--light">
        <Link to="/">
          <img src="/logo-veyor.svg" alt="Veyor logo" />
        </Link>
      </div>

      <div className="menu-layer--page">
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
          isFixed={true}
        />
      </div>

      <section className="contacto-section">
        <div className="container contacto-container">
          <div className="contacto-card">
            <div className="contacto-card-image">
              <img src="/img-contacto.png" alt="Contacto Veyor" />
            </div>

            <div className="contacto-card-form">
              <h1>¿Tenés alguna duda?</h1>
              <p>
                Completá el formulario y un asesor de VEYOR se pondrá en
                contacto con vos.
              </p>

              <form className="contacto-form">
                <input type="text" placeholder="Nombre y apellido" />
                <input type="email" placeholder="Email" />
                <input type="tel" placeholder="Teléfono" />

                <div className="contacto-textarea-wrap">
                  <textarea
                    placeholder="Escribí tu consulta aquí..."
                    maxLength="500"
                    rows="6"
                  />
                  <span className="contacto-counter">0/500</span>
                </div>

                <p className="contacto-tyc">
                  Al enviar, usted declara haber leído y aceptado los{' '}
                  <a href="/">Términos y Condiciones de Uso</a> y la{' '}
                  <a href="/">Política de Privacidad</a>.
                </p>

                <button type="submit" className="contacto-btn">
                  Enviar mensaje
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Contacto