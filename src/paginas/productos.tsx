import Nav from '../componentes/nav1';
import "bootstrap/dist/css/bootstrap.min.css";
import CardProducto from '../componentes/cardProducto';
import { useEffect, useState } from 'react';
import data from '../accesorios/db/instrumentos.json';
import { Instrumento } from '../entidades/Instrumento';
import { getAllInstrumentos } from '../componentes/FuncionesApi';

function Productos() {
    const [instrumentos, setInstrument] = useState<Instrumento[]>([]);
    const getInstrumentos =async () => {
        let datos: Instrumento[] = await getAllInstrumentos();
        setInstrument(datos);
    }

    useEffect(()=>{
        getInstrumentos();
    }, []);

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