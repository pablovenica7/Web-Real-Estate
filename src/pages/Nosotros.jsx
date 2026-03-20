import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import StaggeredMenu from '../components/StaggeredMenu'
import TextPressure from '../components/TextPressure'

gsap.registerPlugin(ScrollTrigger)

const menuItems = [
  { label: 'Home', link: '/', icon: '/icono-home.svg' },
  { label: 'Nosotros', link: '/nosotros', icon: '/icono-nosotros.svg' },
  { label: 'Contacto', link: '/contacto', icon: '/icono-contacto.svg' },
]

function Nosotros() {
  const textRef = useRef(null)
  const imageRef = useRef(null)
  const sobreSectionRef = useRef(null)

  const valoresRef = useRef([])
  const valoresSectionRef = useRef(null)

  const numerosSectionRef = useRef(null)
  const numerosCardsRef = useRef([])
  const yearsRef = useRef(null)
  const buildingsRef = useRef(null)
  const deliveredRef = useRef(null)
  const areaRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(textRef.current, { x: -120, opacity: 0 })
      gsap.set(imageRef.current, { x: 120, opacity: 0 })
      gsap.set(valoresRef.current, { y: 100, opacity: 0 })
      gsap.set(numerosCardsRef.current, { y: 60, opacity: 0 })

      gsap.to(textRef.current, {
        x: 0,
        opacity: 1,
        duration: 1.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sobreSectionRef.current,
          start: 'top 75%',
          toggleActions: 'play none none none',
        },
      })

      gsap.to(imageRef.current, {
        x: 0,
        opacity: 1,
        duration: 1.1,
        ease: 'power3.out',
        delay: 0.15,
        scrollTrigger: {
          trigger: sobreSectionRef.current,
          start: 'top 75%',
          toggleActions: 'play none none none',
        },
      })

      gsap.to(valoresRef.current, {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
        stagger: 0.2,
        clearProps: 'transform',
        scrollTrigger: {
          trigger: valoresSectionRef.current,
          start: 'top 75%',
          toggleActions: 'play none none none',
        },
      })

      gsap.to(numerosCardsRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.9,
        ease: 'power3.out',
        stagger: 0.12,
        clearProps: 'transform',
        scrollTrigger: {
          trigger: numerosSectionRef.current,
          start: 'top 78%',
          toggleActions: 'play none none none',
        },
      })

      const counters = [
        { ref: yearsRef, value: 7, suffix: '' },
        { ref: buildingsRef, value: 14, suffix: '' },
        { ref: deliveredRef, value: 1717, suffix: '' },
        { ref: areaRef, value: 170, suffix: 'k' },
      ]

      counters.forEach(({ ref, value, suffix }) => {
        const counterObj = { val: 0 }

        gsap.to(counterObj, {
          val: value,
          duration: 2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: numerosSectionRef.current,
            start: 'top 78%',
            toggleActions: 'play none none none',
          },
          onUpdate: () => {
            if (!ref.current) return
            const current = Math.round(counterObj.val)
            ref.current.textContent = `${current}${suffix}`
          },
        })
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <main className="nosotros-page">
      <div className="nosotros-background" />

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

      <section className="nosotros-hero">
        <div className="nosotros-hero-text">
          <TextPressure
            text="NOSOTROS"
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

        <a href="#sobre-nosotros" className="scroll-down-nosotros">
          <img src="/icono-flecha.png" alt="Bajar a Sobre Nosotros" />
        </a>
      </section>

      <section
        id="sobre-nosotros"
        className="nosotros-content-section"
        ref={sobreSectionRef}
      >
        <div className="container nosotros-main">
          <div className="nosotros-divider" />

          <section className="sobre-nosotros-card">
            <div ref={textRef} className="sobre-nosotros-text">
              <h2>Sobre Nosotros</h2>

              <p>
                VEYOR es una reconocida inmobiliaria con una sólida presencia en
                Argentina. VEYOR se compromete a definir el arte de vivir a través
                de un diseño, arquitectura y desarrollo innovadores y de alto nivel.
              </p>

              <p>
                Expertos en bienes raíces residenciales, comerciales y de uso mixto,
                el ámbito profesional de VEYOR abarca la búsqueda y el análisis de
                terrenos, la financiación, la gestión del desarrollo, la construcción,
                las ventas y la gestión de activos.
              </p>

              <p>
                Nuestro equipo, altamente capacitado y comprometido con la calidad
                y la entrega puntual, está siempre disponible para desarrollar
                proyectos de excelencia tanto a nivel local como internacional.
              </p>
            </div>

            <div ref={imageRef} className="sobre-nosotros-image">
              <img src="/img-nosotros.png" alt="Proyecto inmobiliario" />
            </div>
          </section>
        </div>

        <section ref={valoresSectionRef} className="valores-section">
          <div className="valores-overlay" />

          <div className="valores-inner">
            <div
              className="valor-card"
              ref={(el) => (valoresRef.current[0] = el)}
            >
              <h3>VISIÓN</h3>
              <p>
                Ser una desarrolladora inmobiliaria de referencia, creando
                proyectos innovadores y sustentables que generen valor a largo plazo.
              </p>
            </div>

            <div
              className="valor-card"
              ref={(el) => (valoresRef.current[1] = el)}
            >
              <h3>MISIÓN</h3>
              <p>
                Desarrollar espacios de alta calidad que integren diseño,
                funcionalidad y excelencia, mejorando la vida de las personas.
              </p>
            </div>

            <div
              className="valor-card"
              ref={(el) => (valoresRef.current[2] = el)}
            >
              <h3>PROPÓSITO</h3>
              <p>
                Construir confianza y aportar valor a la sociedad a través de
                proyectos que trasciendan en el tiempo.
              </p>
            </div>
          </div>
        </section>

        <section ref={numerosSectionRef} className="numeros-section">
          <div className="container numeros-container">
            <div className="numeros-header">
              <h2>Nuestros números</h2>
            </div>

            <div className="numeros-grid">
              <article
                className="numero-card"
                ref={(el) => (numerosCardsRef.current[0] = el)}
              >
                <div className="numero-icon-slot">
                  <img
                    src="/icono-calendario.png"
                    alt="Ícono calendario"
                    className="numero-icon"
                  />
                </div>
                <div className="numero-value" ref={yearsRef}>
                  0
                </div>
                <p className="numero-label">Años de trayectoria</p>
              </article>

              <article
                className="numero-card"
                ref={(el) => (numerosCardsRef.current[1] = el)}
              >
                <div className="numero-icon-slot">
                  <img
                    src="/icono-edificios.png"
                    alt="Ícono edificios"
                    className="numero-icon"
                  />
                </div>
                <div className="numero-value" ref={buildingsRef}>
                  0
                </div>
                <p className="numero-label">Edificios finalizados</p>
              </article>

              <article
                className="numero-card"
                ref={(el) => (numerosCardsRef.current[2] = el)}
              >
                <div className="numero-icon-slot">
                  <img
                    src="/icono-llave.png"
                    alt="Ícono llave"
                    className="numero-icon"
                  />
                </div>
                <div className="numero-value" ref={deliveredRef}>
                  0
                </div>
                <p className="numero-label">Departamentos entregados</p>
              </article>

              <article
                className="numero-card"
                ref={(el) => (numerosCardsRef.current[3] = el)}
              >
                <div className="numero-icon-slot">
                  <img
                    src="/icono-regla.png"
                    alt="Ícono regla"
                    className="numero-icon"
                  />
                </div>
                <div className="numero-value">
                  <span ref={areaRef}>0</span> m²
                </div>
                <p className="numero-label">Construidos</p>
              </article>
            </div>
          </div>
        </section>
      </section>
    </main>
  )
}

export default Nosotros