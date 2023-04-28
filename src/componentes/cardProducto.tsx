import "bootstrap/dist/css/bootstrap.min.css";
import { Instrumento } from '../entidades/Instrumento';

export const envio = (instrument: Instrumento) => {
    if (instrument.costoEnvio === "G") {
        return (<div className="card-body text-success">
                    <h5 className="card-title"><img src={process.env.PUBLIC_URL + '/img/camion.png'} />Envió gratis a todo el país</h5>
                </div>)
    } else {
        return (<p className="card-text">Costo de envio Interior de Argentina ${instrument.costoEnvio}</p>)
    }
}

function CardProducto(instrumento: Instrumento) {
    let urlImg: string = "img/"+ instrumento.imagen
  return (
    <div className="CardProducto">
        <div className="card mb-3">
            <div className="row g-0">
                <div className="col-md-4">
                    <a onClick={event => window.location.href = 'http://localhost:3000/productos/'+instrumento.id}> <img src={urlImg}  className="img-fluid rounded-start" alt="..."/></a>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{instrumento.instrumento}</h5>
                        <p className="card-text">$ {instrumento.precio}</p>
                        {envio(instrumento)}
                        <p className="card-text"><small className="text-body-secondary">{instrumento.cantidadVendida} vendidos</small></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );

}

export default CardProducto;