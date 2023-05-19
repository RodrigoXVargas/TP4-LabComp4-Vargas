import Nav from '../componentes/nav1';
import {useEffect, useState } from 'react';
import { Instrumento } from '../entidades/Instrumento';
import { deleteInstrumentoById, getAllInstrumentos, saveInstrument } from '../componentes/FuncionesApi';
import FormCrudPage from '../componentes/formCrudPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import EliminarForm from '../componentes/EliminarForm';
import './crud.css';




let modificarCadena = (cadena: string) => {
    if(cadena === "G"){
      return "Gratis";
    } else if(cadena.length > 30){
      return cadena.substring(0,30)+"...";
    } else {
      return cadena
    }
  }

const CRUD: React.FC = () => {
  
  const [instrumentos, setInstrument] = useState<Instrumento[]>([]);
  
  const getInstrumentos =async () => {
    let datos: Instrumento[] = await getAllInstrumentos();
    setInstrument(datos);
  }

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [instrumentoSeleccionado, setInstrumentoSeleccionado] = useState<Instrumento | undefined>(undefined);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const handleOpenModal = (instrumento?: Instrumento) => {
    setIsModalOpen(true);
    setInstrumentoSeleccionado(instrumento);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setInstrumentoSeleccionado(undefined);
  };

  const handleOpenDeleteModal = (instrumento?: Instrumento) => {
    setIsDeleteModalOpen(true);
    setInstrumentoSeleccionado(instrumento);
  };

  const handleCloseDeleteModal = () => {
    setIsDeleteModalOpen(false);
    setInstrumentoSeleccionado(undefined);
  };

  const handleConfirmDelete = () => {
    if (instrumentoSeleccionado) {
      deleteInstrumentoById(instrumentoSeleccionado.id)
        .then(() => {
          handleCloseDeleteModal();
          window.location.reload();
        })
        .catch((error) => {
          console.error('Error al eliminar el instrumento:', error);
        });
    }
    
  };

  useEffect(()=>{
    getInstrumentos();
  }, []);

  return (
      <div className="CRUD">
          <Nav></Nav>
          <div className='cuerpo'>
          <button className='btn btn-primary' id="btn-agregar" onClick={() => handleOpenModal()}>Agregar Instrumento</button>
          <div className='table-responsive'>
              <table className="table table-dark table-hover table-sm align-middle">
              
                <thead >
                  <tr>
                      <th>ID</th>
                      <th>Nombre</th>
                      <th>Marca</th>
                      <th>Modelo</th>
                      <th>Precio</th>
                      <th>Costo de Envio</th>
                      <th>Cantidad Vendida</th>
                      <th>Boton Modificar</th>
                      <th>Boton Eliminar</th>
                  </tr>
                </thead>
                <tbody className="">
                  {instrumentos.map((instrumento: Instrumento, index) => (
                      <tr key={instrumento.id} className="RowInstrumento">
                          <th >{instrumento.id}</th>
                          <td>{modificarCadena(instrumento.instrumento)}</td>
                          <td>{instrumento.marca}</td>
                          <td>{instrumento.modelo}</td>
                          <td>{instrumento.precio}</td>
                          <td>{modificarCadena(instrumento.costo_envio)}</td>
                          <td>{instrumento.cantidad_vendida}</td>
                          <td><button className="btn btn-warning" onClick={() => handleOpenModal(instrumento)}>Modificar</button></td>
                          <td><button className="btn btn-danger" onClick={() => handleOpenDeleteModal(instrumento)}>Eliminar</button>
                          </td>
                      </tr>
                  ))}
                </tbody>
              </table>
              <FormCrudPage
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                instrumentoSeleccionado={instrumentoSeleccionado}
              />
              <EliminarForm
                isOpen={isDeleteModalOpen}
                onClose={handleCloseDeleteModal}
                onConfirm={handleConfirmDelete}
              />
          </div>
      </div>
      </div>
  );
}

export default CRUD;