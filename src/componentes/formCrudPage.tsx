import { Instrumento } from '../entidades/Instrumento';
import React , { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import ReactModal from 'react-modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import { text } from 'stream/consumers';
import { saveInstrument } from './FuncionesApi';

ReactModal.setAppElement('#root'); // Reemplaza '#root' con el identificador del elemento raíz de tu aplicación

interface FormData {
  id?: number;
  instrumento: string;
  marca: string;
  modelo: string;
  imagen: string;
  precio: string;
  costo_envio: string;
  cantidad_vendida: string;
  descripcion: string;
}

interface FormModalProps {
  isOpen: boolean;
  onClose: () => void;
  instrumentoSeleccionado?: Instrumento;
}

const FormCrudPage: React.FC<FormModalProps> = ({ isOpen, onClose, instrumentoSeleccionado }) => {
  const [formData, setFormData] = useState<FormData>({
    id: 0,
    instrumento: '',
    marca: '',
    modelo: '',
    imagen: '',
    precio: '',
    costo_envio: '',
    cantidad_vendida: '',
    descripcion: ''
  });

  useEffect(() => {
    if (instrumentoSeleccionado) {
      setFormData(instrumentoSeleccionado);
    } else {
      setFormData({
        id: 0,
        instrumento: '',
        marca: '',
        modelo: '',
        imagen: '',
        precio: '',
        costo_envio: '',
        cantidad_vendida: '',
        descripcion: '',
      });
    }
  }, [instrumentoSeleccionado]);
  
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    let instr = new Instrumento(formData.id, formData.instrumento, formData.marca, formData.modelo,
      formData.imagen, formData.precio, formData.costo_envio, formData.cantidad_vendida, formData.descripcion);
    saveInstrument(instr).then(() => {
      onClose();
      window.location.reload()
    });

  };
  
  return (
      
    <ReactModal isOpen={isOpen} onRequestClose={onClose} className='FormCrudPage'>
      <div className='form-container'>
        <h2>{instrumentoSeleccionado ? 'Modificar instrumento' : 'Agregar instrumento'}</h2>
        <form onSubmit={handleSubmit} className="form">
          <div className="input-group input-group-sm mb-3">
            <span className="input-group-text" id="inputGroup-sizing-sm">Id</span>
            <input type="text" name="id" value={formData.id} placeholder="Id" onChange={handleChange} disabled className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"/>
          </div>
          <div className="input-group input-group-sm mb-3">
            <span className="input-group-text" id="inputGroup-sizing-sm">Nombre</span>
            <input type="text" name="instrumento" value={formData.instrumento} placeholder="Nombre" onChange={handleChange} required className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"/>
          </div>
          <div className="input-group input-group-sm mb-3">
            <span className="input-group-text" id="inputGroup-sizing-sm">Marca</span>
            <input type="text" name="marca" value={formData.marca} placeholder="Marca" onChange={handleChange} required className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"/>
          </div>
          <div className="input-group input-group-sm mb-3">
            <span className="input-group-text" id="inputGroup-sizing-sm">Modelo</span>
            <input type="text" name="modelo" value={formData.modelo} placeholder="Modelo" onChange={handleChange} required className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"/>
          </div>
          <div className="input-group input-group-sm mb-3">
            <span className="input-group-text" id="inputGroup-sizing-sm">Precio</span>
            <input type="text" name="precio" value={formData.precio} placeholder="Precio" onChange={handleChange} required className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"/>
          </div>
          <div className="input-group input-group-sm mb-3">
            <span className="input-group-text" id="inputGroup-sizing-sm">Costo de envio</span>
            <input type="text" name="costo_envio" value={formData.costo_envio} placeholder="Costo de envio" onChange={handleChange} required className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"/>
          </div>
          <div className="input-group input-group-sm mb-3">
            <span className="input-group-text" id="inputGroup-sizing-sm">Cantidad vendida</span>
            <input type="text" name="cantidad_vendida" value={formData.cantidad_vendida} placeholder="Cantidad vendida" onChange={handleChange} required className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"/>
          </div>
          <div className="input-group input-group-sm mb-3">
            <span className="input-group-text" id="inputGroup-sizing-sm">Path de la imagen</span>
            <input type="text" name="imagen" value={formData.imagen} placeholder="Path de la imagen" onChange={handleChange} required className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"/>
          </div>
          <div className="input-group input-group-sm mb-3">
            <span className="input-group-text" id="inputGroup-sizing-sm">Descripcion</span>
            <input type="text" name="descripcion" value={formData.descripcion} placeholder="Descripcion" onChange={handleChange} required className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"/>
          </div>
          
          <div>
          <button type="submit" className='btn btn-primary'>{instrumentoSeleccionado ? 'Guardar cambios' : 'Agregar'}</button>
          <button className='btn btn-secondary' onClick={onClose}>Cancelar</button>
          </div>      
        </form>
      </div>
    </ReactModal>
  );
};




export default FormCrudPage;
