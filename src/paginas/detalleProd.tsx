import Nav from '../componentes/nav1';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Instrumento } from '../entidades/Instrumento';
import DetalleInst from '../componentes/cardDetalle';
import { getInstrumentoById } from '../componentes/FuncionesApi';
import 'bootstrap/dist/css/bootstrap.min.css';

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
            {instrumento !== undefined && DetalleInst(instrumento)}
        </>
    );
    
}


export default Detalle;