function Footer() {
  return (
    <div className="container">
      <footer className="py-5">

        <div className="row">

          <div className="col-6 col-md-2 mb-3">
            <h5>Categorias</h5>

            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="/" className="nav-link p-0 text-body-secondary">
                  Home
                </a>
              </li>

              <li className="nav-item mb-2">
                <a href="/nosotros" className="nav-link p-0 text-body-secondary">
                  Nosotros
                </a>
              </li>

              <li className="nav-item mb-2">
                <a href="/proyectos" className="nav-link p-0 text-body-secondary">
                  Proyectos
                </a>
              </li>

              <li className="nav-item mb-2">
                <a href="/contacto" className="nav-link p-0 text-body-secondary">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          <div className="col-6 col-md-4 mb-3">
            <h5>Contacto</h5>

            <ul className="nav flex-column">

              <li className="nav-item mb-2">
                <span className="nav-link p-0 text-body-secondary">
                  Dirección: Av. Colón 1234, Córdoba, Argentina
                </span>
              </li>

              <li className="nav-item mb-2">
                <span className="nav-link p-0 text-body-secondary">
                  Teléfono: +54 351 123 4567
                </span>
              </li>

              <li className="nav-item mb-2">
                <span className="nav-link p-0 text-body-secondary">
                  Email: contacto@veyor.com
                </span>
              </li>

              <li className="nav-item mb-2">
                <span className="nav-link p-0 text-body-secondary">
                  Horarios: Lun a Vie de 9 a 18 hs
                </span>
              </li>

            </ul>
          </div>

        </div>

        <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">

          <p>© 2026 Veyor. Todos los derechos reservados.</p>

          <ul className="list-unstyled d-flex">

            <li className="ms-3">
              <a className="footer-icon fs-4" href="#">
                <i className="bi bi-instagram"></i>
              </a>
            </li>

            <li className="ms-3">
              <a className="footer-icon fs-4" href="#">
                <i className="bi bi-facebook"></i>
              </a>
            </li>

          </ul>

        </div>

      </footer>
    </div>
  )
}

export default Footer
