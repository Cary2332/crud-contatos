import React, { useState } from 'react';
import ContatoForm from './components/ContatoForm';
import ContatoItem from './components/ContatoItem';
import ModalEdicao from './components/ModalEdicao';
import ModalConfirmacao from './components/ModalConfirmacao'; 
import { Container } from 'react-bootstrap';

const App = () => {
  const [contatos, setContatos] = useState([]);
  const [contatoEditando, setContatoEditando] = useState(null);
  const [mostrarModalEdicao, setMostrarModalEdicao] = useState(false);

  const [mostrarModalConfirmacao, setMostrarModalConfirmacao] = useState(false);
  const [contatoSelecionado, setContatoSelecionado] = useState(null);

  const adicionarContato = (contato) => {
    const novo = { ...contato, id: Date.now() };
    setContatos([...contatos, novo]);
  };

  const abrirModalEdicao = (contato) => {
    setContatoEditando(contato);
    setMostrarModalEdicao(true);
  };

  const salvarEdicao = (id, contatoAtualizado) => {
    const atualizados = contatos.map((c) => (c.id === id ? contatoAtualizado : c));
    setContatos(atualizados);
    setMostrarModalEdicao(false);
  };

  const confirmarExclusao = (contato) => {
    setContatoSelecionado(contato);
    setMostrarModalConfirmacao(true);
  };

  const deletarContato = (id) => {
    const filtrados = contatos.filter((c) => c.id !== id);
    setContatos(filtrados);
  };

  const deletarConfirmado = () => {
    deletarContato(contatoSelecionado.id);
    setMostrarModalConfirmacao(false);
  };

  return (
    <Container className="my-4">
      <ContatoForm adicionarContato={adicionarContato} />
      {contatos.map((contato) => (
        <ContatoItem
          key={contato.id}
          contato={contato}
          abrirModalEdicao={() => abrirModalEdicao(contato)}
          confirmarExclusao={() => confirmarExclusao(contato)}
        />
      ))}

      {mostrarModalEdicao && (
        <ModalEdicao
          contato={contatoEditando}
          fecharModal={() => setMostrarModalEdicao(false)}
          salvarEdicao={salvarEdicao}
        />
      )}

      <ModalConfirmacao
        show={mostrarModalConfirmacao}
        onClose={() => setMostrarModalConfirmacao(false)}
        onConfirm={deletarConfirmado}
        contato={contatoSelecionado}
      />
    </Container>
  );
};

export default App;
