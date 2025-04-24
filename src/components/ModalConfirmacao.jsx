
import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const ModalConfirmacao = ({ show, onClose, onConfirm, contato }) => {
  return (
    <Modal show={show} onHide={onClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Confirmar Exclusão</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Tem certeza que deseja excluir o contato <strong>{contato?.nome}</strong>?
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Cancelar
        </Button>
        <Button variant="danger" onClick={onConfirm}>
          Excluir
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalConfirmacao;
