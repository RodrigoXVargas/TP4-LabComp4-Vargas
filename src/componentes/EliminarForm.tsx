import React from 'react';
import ReactModal from 'react-modal';
import { Instrumento } from '../entidades/Instrumento';

interface DeleteModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const EliminarForm: React.FC<DeleteModalProps> = ({ isOpen, onClose, onConfirm}) => {
  return (
    <ReactModal isOpen={isOpen} onRequestClose={onClose} className="modal-delete">
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                    <h2>Eliminar instrumento</h2>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={onClose}></button>
                </div>
                <div className="modal-body">
                    <p>¿Estás seguro de que deseas eliminar este instrumento?</p>
                </div>
                <div className="modal-footer">
                    <button className='btn btn-danger' onClick={onConfirm}>Confirmar</button>
                    <button className='btn btn-secondary' onClick={onClose}>Cancelar</button>
                </div>
            </div>
        </div>
    </ReactModal>
  );
};

export default EliminarForm;