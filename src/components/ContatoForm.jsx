import React, { useState } from 'react';
import { Form, Button, Card, Alert } from 'react-bootstrap';

const formatarTelefone = (valor) => {
  const numeros = valor.replace(/\D/g, '');

  if (numeros.length <= 10) {
    return numeros.replace(/(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3');
  } else {
    return numeros.replace(/(\d{2})(\d{5})(\d{0,4})/, '($1) $2-$3');
  }
};

const ContatoForm = ({ adicionarContato }) => {
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!nome || !telefone || !email) {
      setMessage('Preencha todos os campos!');
      setMessageType('danger');
      return;
    }

    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      setMessage('Digite um email válido!');
      setMessageType('danger');
      return;
    }

    adicionarContato({ nome, telefone, email });

    setMessage('Contato adicionado com sucesso!');
    setMessageType('success');

    setNome('');
    setTelefone('');
    setEmail('');
  };

  return (
    <Card className="shadow-sm mb-4">
      <Card.Body>
        <h4 className="mb-3">Adicionar Contato</h4>

        {message && (
          <Alert variant={messageType} onClose={() => setMessage('')} dismissible>
            {message}
          </Alert>
        )}

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Nome</Form.Label>
            <Form.Control
              type="text"
              placeholder="Digite o nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Telefone</Form.Label>
            <Form.Control
              type="text"
              placeholder="Digite o telefone"
              value={telefone}
              onChange={(e) => setTelefone(formatarTelefone(e.target.value))}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Digite o email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Adicionar Contato
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default ContatoForm;
