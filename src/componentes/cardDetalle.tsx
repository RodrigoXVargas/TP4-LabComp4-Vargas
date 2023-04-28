import "bootstrap/dist/css/bootstrap.min.css";
import { Instrumento } from '../entidades/Instrumento';
import { envio } from "./cardProducto";


function DetalleInst(instrumento: Instrumento) {
    let urlImg: string = "../img/"+ instrumento.imagen
    return (
        <div className="Detalle">
            <div className="card mb-3" >
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={urlImg} className="img-fluid rounded-start" alt="..."></img>
                        <p className="card-text">Descripcion</p>
                        <p className="card-text">{instrumento.descripcion}</p>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <p className="card-text">{instrumento.cantidadVendida} vendidos</p>
                            <h5 className="card-title">{instrumento.instrumento}</h5>
                            <p className="card-text">$ {instrumento.precio}</p>
                            <p className="card-text">Marca: {instrumento.marca}</p>
                            <p className="card-text">Modelo: {instrumento.modelo}</p>
                            <p className="card-text">Costo de envio</p>
                            {envio(instrumento)}
                            <button type="button" className="btn btn-outline-primary">Agregar al carrito</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  

}

export default DetalleInst;