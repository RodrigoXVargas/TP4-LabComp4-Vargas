import Nav from '../componentes/nav1';
import { Route, useParams } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import data from '../accesorios/db/instrumentos.json';
import { useEffect, useState } from 'react';
import { Instrumento } from '../entidades/Instrumento';
import DetalleInst from '../componentes/cardDetalle';
import { getInstrumentoById } from '../componentes/FuncionesApi';

function Detalle() {
    let { id } = useParams();
    const [instrumento, setInstrument] = useState<Instrumento>();

    const getInstrumento =async () => {
        let instrumentoSeleccionado: Instrumento = await getInstrumentoById(Number(id));
        setInstrument(instrumentoSeleccionado);
    }

    useEffect(()=>{
        getInstrumento();
    }, []);

    return (
        <>
            <Nav></Nav>
            {instrumento !== undefined ? DetalleInst(instrumento) : null}
        </>
    );
    
}


export default Detalle;