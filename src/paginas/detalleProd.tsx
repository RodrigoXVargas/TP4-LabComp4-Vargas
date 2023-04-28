import Nav from '../componentes/nav1';
import { Route, useParams } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import data from '../accesorios/db/instrumentos.json';
import { useState } from 'react';
import { Instrumento } from '../entidades/Instrumento';
import DetalleInst from '../componentes/cardDetalle';

function Detalle() {
    let { id } = useParams();
    let id_number: number = Number(id) - 1;
    const [instruments, setInstrument] = useState<Array<Instrumento>>(data.instrumentos)
    return (
        <>
            <Nav></Nav>
            {DetalleInst(instruments[id_number])}
        </>
    );
    
}


export default Detalle;