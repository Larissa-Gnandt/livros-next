import type { NextPage } from 'next'
import React, { useState, useEffect } from 'react'
import Head from 'next/head';
import Menu from '../componentes/Menu'; // Ajuste o caminho conforme necessário
import styles from '../styles/Home.module.css'; // Importando os estilos
import LinhaLivro from '../componentes/LinhaLivro'; // Importando o componente LinhaLivro

// Definindo a interface Livro conforme necessário
interface Livro {
  codigo: number;
  titulo: string;
  resumo: string;
  codEditora: number;
  autores: string[];
}

const LivroLista: React.FC = () => {
  const baseURL = "http://localhost:3000/api/livros"; // a) Definindo a baseURL
  const [livros, setLivros] = useState<Array<Livro>>([]); // e) Estado para os livros
  const [carregado, setCarregado] = useState<boolean>(false); // e) Estado de carregamento

  // c) Função para obter livros
  const obterLivros = async () => {
    const response = await fetch(baseURL);
    const data = await response.json();
    return data; // Retornando a resposta no formato JSON
  };

  // d) Função para excluir livro
  const excluirLivro = async (codigo: number) => {
    const response = await fetch(`${baseURL}/${codigo}`, {
      method: 'DELETE',
    });
    const result = await response.json();
    return result.ok; // Retornando o campo ok da resposta
  };

  // g) Método para excluir um livro
  const excluir = async (codigo: number) => {
    const sucesso = await excluirLivro(codigo);
    if (sucesso) {
      setLivros((prevLivros) => prevLivros.filter(livro => livro.codigo !== codigo)); // Atualiza a lista de livros
    }
    setCarregado(false); // Forçando o redesenho da página
  };

  // f) Efeito para buscar livros
  useEffect(() => {
    const fetchLivros = async () => {
      const dados = await obterLivros();
      setLivros(dados); // Alimentando o estado com os livros obtidos
      setCarregado(true); // Alterando estado para carregado
    };

    fetchLivros();
  }, []);

  return (
    <div className={styles.container}> {/* h) Estrutura principal */}
      <Head>
        <title>Lista de Livros</title>
      </Head>
      <Menu /> {/* Componente de Menu */}
      <main>
        <h1>Lista de Livros</h1>
        <table className="table">
          <thead>
            <tr>
              <th>Título</th>
              <th>Resumo</th>
              <th>Editora</th>
              <th>Autores</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {livros.map((livro) => ( // i) Mapeando os livros para gerar linhas
              <LinhaLivro 
                key={livro.codigo} 
                livro={livro} 
                excluir={excluir} 
              />
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
};

export default LivroLista;
