import 'bootstrap/dist/css/bootstrap.min.css';
import { Instrumento } from '../entidades/Instrumento';
import { envio } from "./cardProducto";


function DetalleInst(instrumento: Instrumento) {
    let urlImg = /^nro/.test(instrumento.imagen) ? "../img/" + instrumento.imagen : instrumento.imagen;
    return (
        <div className="Detalle">
            <div className="det-content">
                <div className="det-col1-content">
                    <div className="imagen-content">
                        <img src={urlImg} className="imagen-det" alt="..."></img>
                    </div>
                    <p className="label-descripcion">Descripcion</p>
                    <p className="det-descripcion">{instrumento.descripcion}</p>
                </div>
                <div className="det-col2-content">
                    <div className="det-datos-content">
                        <p className="det-cantVentas">{instrumento.cantidad_vendida} vendidos</p>
                        <h4 className="det-titulo">{instrumento.instrumento}</h4>
                        <p className="det-precio">$ {instrumento.precio}</p>
                        <p className="det-marca">Marca: {instrumento.marca}</p>
                        <p className="det-modelo">Modelo: {instrumento.modelo}</p>
                        <p className="det-costo">Costo de envio:</p>
                        {envio(instrumento)}
                        <button type="button" className="det-buttom-carrito">Agregar al carrito</button>
                    </div>
                </div>
            </div>
            
        </div>
    );
  

}

export default DetalleInst;