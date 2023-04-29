import Nav from '../componentes/nav1';
import "bootstrap/dist/css/bootstrap.min.css";
import CardProducto from '../componentes/cardProducto';
import { useState } from 'react';
import data from '../accesorios/db/instrumentos.json';
import { Instrumento } from '../entidades/Instrumento';

function Productos() {
    const [instrumentos, setInstrument] = useState<Array<Instrumento>>(data.instrumentos)
    return (
        <div className="Productos">
            <Nav></Nav>
            <div className='grilla'>
            <h2>Nuestros productos</h2>
            {instrumentos.map((instrumento: Instrumento) => (
                CardProducto(instrumento)
            ))}
            </div>
        </div>
    );
}

export default Productos;