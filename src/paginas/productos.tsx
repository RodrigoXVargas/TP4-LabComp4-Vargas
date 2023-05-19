import Nav from '../componentes/nav1';
import CardProducto from '../componentes/cardProducto';
import { useEffect, useState } from 'react';
import { Instrumento } from '../entidades/Instrumento';
import { getAllInstrumentos } from '../componentes/FuncionesApi';
import 'bootstrap/dist/css/bootstrap.min.css';

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