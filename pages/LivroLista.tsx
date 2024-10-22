import { useState, useEffect } from "react";
import Head from "next/head";
import Menu from "../componentes/Menu"; // Assumindo que há um componente Menu
import LinhaLivro from "../componentes/LinhaLivro"; // Assumindo que há um componente LinhaLivro
import styles from "../src/app/page.module.css"; // Adjust the path and filename as necessary// Adjust the path and filename as necessary
import "bootstrap/dist/css/bootstrap.min.css";

const baseURL: string = "http://localhost:3000/api/livros";

// Função para obter os livros
const obterLivros = async () => {
  const resposta = await fetch(baseURL);
  return await resposta.json();
};

// Função para excluir um livro pelo código
const excluirLivro = async (codigo: number) => {
  const resposta = await fetch(`${baseURL}/${codigo}`, {
    method: "DELETE",
  });
  return resposta.ok;
};

interface Livro {
  codigo: number;
  codEditora: number;
  titulo: string;
  resumo: string;
  autores: string[];
}

const LivroLista = () => {
  const [livros, setLivros] = useState<Array<Livro>>([]);
  const [carregado, setCarregado] = useState<boolean>(false);

  // Hook para carregar os livros quando a página for carregada ou o estado 'carregado' mudar
  useEffect(() => {
    if (!carregado) {
      obterLivros().then((dados) => {
        setLivros(dados);
        setCarregado(true);
      });
    }
  }, [carregado]);

  // Função para excluir um livro e forçar o recarregamento da página
  const excluir = (codigo: number) => {
    excluirLivro(codigo).then((sucesso) => {
      if (sucesso) {
        setCarregado(false); // Força o recarregamento ao definir como false
      }
    });
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Catálogo de Livros </title>
        <meta name="description" content="Visualização e exclusão de livros" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Menu />

      <div style={{ marginTop: "20px", marginLeft: "20px", marginRight: "20px" }}>
        <main className={styles.main}>
          <h1>Catálogo de Livros</h1>
          <table>
            <thead style={{ backgroundColor: 'black', color: 'white', padding: "100px" }}>
              <tr style={{ fontSize: "20px" }}>
                <th>Título</th>
                <th>Resumo</th>
                <th>Editora</th>
                <th>Autores</th>
              </tr>
            </thead>
            <tbody>
              {livros.map((livro) => (
                <LinhaLivro
                  key={livro.codigo}
                  livro={livro}
                  excluir={() => excluir(livro.codigo)}
                />
              ))}
            </tbody>
          </table>
        </main>
      </div>
    </div>
  );
};

export default LivroLista;
