import 'bootstrap/dist/css/bootstrap.min.css';
import { Instrumento } from '../entidades/Instrumento';

export const envio = (instrument: Instrumento) => {
    if (instrument.costo_envio === "G") {
        return (<h6 className="card-envioGratis"><img className="imagen-camion" src={process.env.PUBLIC_URL + '/img/camion.png'} />Envío gratis a todo el país</h6>)
    } else {
        return (<h6 className="card-envioCosto">Costo de envio Interior de Argentina ${instrument.costo_envio}</h6>)
    }
}

function CardProducto(instrumento: Instrumento) {
    let urlImg = /^nro/.test(instrumento.imagen) ? "../img/" + instrumento.imagen : instrumento.imagen;
  return (
    <div className="CardProducto">
        <div className="Card-Content">
            <div className="card-imagen-content">
                <a className="buttom-imagen" onClick={event => window.location.href = 'http://localhost:3000/productos/'+instrumento.id}> <img src={urlImg}  className="card-imagen" alt="..."/></a>
            </div>
            <div className="card-datos">
                <div className="card-datos-content">
                    <p className="card-titulo">{instrumento.instrumento}</p>
                    <h3 className="card-precio">$ {instrumento.precio}</h3>
                    {envio(instrumento)}
                    <p className="card-cantVentas">{instrumento.cantidad_vendida} vendidos</p>
                </div>
            </div>
        </div>
    </div>
  );

}

export default CardProducto;