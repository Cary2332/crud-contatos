import React, { useState, useEffect } from 'react';
import { Modal, Button, Form, Alert } from 'react-bootstrap';

const ModalEdicao = ({ contato, fecharModal, salvarEdicao }) => {
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  const [mensagemErro, setMensagemErro] = useState('');

  useEffect(() => {
    setNome(contato.nome);
    setTelefone(contato.telefone);
    setEmail(contato.email);
  }, [contato]);

  const validarEmail = (email) => {
    const regexEmail = /\S+@\S+\.\S+/;
    return regexEmail.test(email) && email.endsWith('@gmail.com');
  };

  const handleSalvar = () => {
    if (!nome || !telefone || !email) {
      setMensagemErro('Preencha todos os campos!');
      return;
    }

    if (!validarEmail(email)) {
      setMensagemErro('O e-mail deve ser válido e terminar com "@gmail.com"');
      return;
    }

    setMensagemErro('');
    
    
    salvarEdicao(contato.id, { id: contato.id, nome, telefone, email });
  };

  return (
    <Modal show onHide={fecharModal} centered>
      <Modal.Header closeButton>
        <Modal.Title>Editar Contato</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {mensagemErro && <Alert variant="danger">{mensagemErro}</Alert>}
        
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Nome</Form.Label>
            <Form.Control
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Telefone</Form.Label>
            <Form.Control
              type="text"
              value={telefone}
              onChange={(e) => setTelefone(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={fecharModal}>
          Cancelar
        </Button>
        <Button variant="primary" onClick={handleSalvar}>
          Salvar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalEdicao;
