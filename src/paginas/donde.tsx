import Nav from '../componentes/nav1';
import "bootstrap/dist/css/bootstrap.min.css";


function Donde() {

    return (
        <div className="Donde">
            <Nav></Nav>
            <div className='Donde-body'></div>
            <div className='Donde-content'>
                <div>
                    <h1>Nuestra ubicacion</h1>
                    <iframe className='Mapa' height={500} width={500} src="https://www.google.com/maps/embed/v1/place?q=Av.%20Las%20Heras%20y%20Av.%20San%20Martin%2C%20Ciudad%20de%20Mendoza&key=AIzaSyBEq7nhkPKV-rRkGcFmEWeAtICCTWf7pxs"></iframe> 
                </div>
            </div>
        </div>
    );
}


export default Donde;