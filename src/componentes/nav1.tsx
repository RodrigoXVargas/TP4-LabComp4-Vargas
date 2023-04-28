import "bootstrap/dist/css/bootstrap.min.css";

function Nav() {

  return (
    <div className="Nav">
      <nav className="Nav-nav">
        <div className="nav-div-content">
          <ul className="nav-div-content-ul">
            <li className="ul-nav-item">
              <a className="nav-item-buttom" onClick={event => window.location.href = 'http://localhost:3000/index'}>Home</a>
            </li>
            <li className="ul-nav-item">
              <a className="nav-link active" onClick={event => window.location.href = 'http://localhost:3000/donde'}>¿Donde estamos?</a>
            </li>
            <li className="ul-nav-item">
              <a className="nav-link active" onClick={event => window.location.href = 'http://localhost:3000/productos'}>Productos</a>
            </li>
          </ul>
        </div>
        
      </nav>
    </div>
  );

}

export default Nav;