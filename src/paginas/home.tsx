import Nav from '../componentes/nav1';
import "bootstrap/dist/css/bootstrap.min.css";


function Home() {

    return (
        <div className="Home">
            <Nav></Nav>
            <div className='Home-body'></div>
            <h5>Musical Hendrix es una tienda de instrumentos musicales con ya más de 15 años de experiencia. Tenemos el 
conocimiento y la capacidad como para informarte acerca de las mejores elecciones para tu compra musical.</h5>

        </div>
    );
}

export default Home;