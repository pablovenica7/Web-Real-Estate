import { useState } from 'react'
import { Link } from 'react-router-dom'
import StaggeredMenu from '../components/StaggeredMenu'
import TextPressure from '../components/TextPressure'

const menuItems = [
  { label: 'Home', link: '/', icon: '/icono-home.svg' },
  { label: 'Nosotros', link: '/nosotros', icon: '/icono-nosotros.svg' },
  { label: 'Contacto', link: '/contacto', icon: '/icono-contacto.svg' },
]

function Contacto() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    mensaje: '',
  })

  const [touched, setTouched] = useState({
    nombre: false,
    email: false,
    telefono: false,
    mensaje: false,
  })

  const validarNombre = formData.nombre.trim().length >= 2
  const validarEmail = formData.email.includes('@')
  const validarTelefono = formData.telefono.replace(/\D/g, '').length >= 10
  const validarMensaje = formData.mensaje.trim().length >= 20

  const formValido =
    validarNombre && validarEmail && validarTelefono && validarMensaje

  const handleChange = (e) => {
    const { name, value } = e.target

    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleFocus = (e) => {
    const { name } = e.target

    setTouched({
      ...touched,
      [name]: true,
    })
  }

  const getFieldClass = (field, isValid) => {
    if (!touched[field]) return ''
    return isValid ? 'campo-ok' : 'campo-error'
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    setTouched({
      nombre: true,
      email: true,
      telefono: true,
      mensaje: true,
    })

    if (!formValido) return

    console.log('Formulario enviado:', formData)
  }

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

      <section className="contacto-hero">
        <div className="contacto-hero-text">
          <TextPressure
            text="CONTACTO"
            flex
            alpha={false}
            stroke={false}
            width
            weight
            italic
            textColor="#ffffff"
            strokeColor="#ff7a00"
            minFontSize={36}
          />
        </div>

        <a href="#contacto-card-section" className="scroll-down-nosotros">
          <img src="/icono-flecha.png" alt="Bajar a formulario de contacto" />
        </a>
      </section>

      <section id="contacto-card-section" className="contacto-section">
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

              <form className="contacto-form" onSubmit={handleSubmit}>
                <div className="campo-wrap">
                  <input
                    type="text"
                    name="nombre"
                    placeholder="Nombre y apellido"
                    value={formData.nombre}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    className={getFieldClass('nombre', validarNombre)}
                    required
                  />

                  {touched.nombre && (
                    <img
                      src={validarNombre ? '/icono_check.png' : '/icono_error.png'}
                      alt=""
                      className="campo-icon"
                    />
                  )}
                </div>

                <div className="campo-wrap">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    className={getFieldClass('email', validarEmail)}
                    required
                  />

                  {touched.email && (
                    <img
                      src={validarEmail ? '/icono_check.png' : '/icono_error.png'}
                      alt=""
                      className="campo-icon"
                    />
                  )}
                </div>

                <div className="campo-wrap">
                  <input
                    type="tel"
                    name="telefono"
                    placeholder="Teléfono"
                    value={formData.telefono}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    className={getFieldClass('telefono', validarTelefono)}
                    required
                  />

                  {touched.telefono && (
                    <img
                      src={
                        validarTelefono
                          ? '/icono_check.png'
                          : '/icono_error.png'
                      }
                      alt=""
                      className="campo-icon"
                    />
                  )}
                </div>

                <div className="campo-wrap contacto-textarea-wrap">
                  <textarea
                    name="mensaje"
                    placeholder="Escribí tu consulta aquí..."
                    maxLength={500}
                    rows="6"
                    value={formData.mensaje}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    className={getFieldClass('mensaje', validarMensaje)}
                    required
                  />

                  {touched.mensaje && (
                    <img
                      src={
                        validarMensaje
                          ? '/icono_check.png'
                          : '/icono_error.png'
                      }
                      alt=""
                      className="campo-icon campo-icon-textarea"
                    />
                  )}

                  <span className="contacto-counter">
                    {formData.mensaje.length}/500
                  </span>
                </div>

                <p className="contacto-tyc">
                  Al enviar, usted declara haber leído y aceptado los{' '}
                  <a href="/">Términos y Condiciones de Uso</a> y la{' '}
                  <a href="/">Política de Privacidad</a>.
                </p>

                <button
                  type="submit"
                  className="contacto-btn"
                  disabled={!formValido}
                >
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
