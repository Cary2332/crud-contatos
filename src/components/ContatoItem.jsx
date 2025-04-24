import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { PencilSquare, Trash } from 'react-bootstrap-icons';

const ContatoItem = ({ contato, abrirModalEdicao, confirmarExclusao }) => {
  return (
    <Card className="mb-3 shadow-sm">
      <Card.Body className="d-flex justify-content-between align-items-center">
        <div>
          <Card.Title>{contato.nome}</Card.Title>
          <Card.Text className="mb-1"><strong>Telefone:</strong> {contato.telefone}</Card.Text>
          <Card.Text><strong>Email:</strong> {contato.email}</Card.Text>
        </div>
        <div className="d-flex gap-2">
          <Button variant="warning" size="sm" onClick={abrirModalEdicao}>
            <PencilSquare /> Editar
          </Button>
          <Button variant="danger" size="sm" onClick={confirmarExclusao}>
            <Trash /> Excluir
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ContatoItem;
