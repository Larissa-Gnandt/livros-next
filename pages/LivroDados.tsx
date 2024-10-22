// LivroDados.tsx

import { useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Menu from "../componentes/Menu"; // Assumindo que há um componente Menu
import ControleEditora from "../classes/controle/ControleEditora"; // Supondo que controleEditora esteja importado
import styles from "../src/app/page.module.css";

const controleEditora = new ControleEditora(); // Instancia o controle de editoras
const baseURL: string = "http://localhost:3000/api/livros";

// Função para incluir um livro
const incluirLivro = async (livro: Livro) => {
  const resposta = await fetch(baseURL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(livro),
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

const LivroDados = () => {
  const [titulo, setTitulo] = useState<string>("");
  const [resumo, setResumo] = useState<string>("");
  const [autores, setAutores] = useState<string>("");
  const [codEditora, setCodEditora] = useState<number>(0);

  const opcoes = controleEditora.getEditoras().map((editora) => ({
    value: editora.codEditora,
    text: editora.nome,
  }));

  const router = useRouter(); // Utiliza o hook useRouter do Next.js para navegação

  // Trata a seleção no combo de editoras
  const tratarCombo = (evento: React.ChangeEvent<HTMLSelectElement>) => {
    setCodEditora(Number(evento.target.value));
  };

  // Função para incluir o livro
  const incluir = async (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault(); // Impede o comportamento padrão de submit

    const novoLivro: Livro = {
      codigo: 0,
      titulo,
      resumo,
      autores: autores.split("\n"), // Separa autores por linhas
      codEditora,
    };

    const sucesso = await incluirLivro(novoLivro);
    if (sucesso) {
      router.push("/LivroLista"); // Navega para a página de lista de livros
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Incluir Livro</title>
        <meta name="description" content="Formulário para inclusão de livros" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Menu />
      <main
        className={styles.main}
        style={{
          display: "block",
          marginLeft: "20px",
          marginRight: "20px",
          marginTop: "20px",
        }}
      >
        <h1>Dados do Livro</h1>
        <form onSubmit={incluir}>
          <div>
            <label htmlFor="titulo" style={{ display: "block" }}>
              Título
            </label>
            <input
              type="text"
              id="titulo"
              value={titulo}
              onChange={(e) => setTitulo(e.target.value)}
              style={{
                minWidth: "90%",
                height: "40px",
                borderWidth: "1.5px",
                borderRadius: "5px",
                outline: "none",
              }}
            />
          </div>
          <div>
            <label
              htmlFor="resumo"
              style={{ display: "block", marginTop: "10px" }}
            >
              Resumo
            </label>
            <textarea
              id="resumo"
              value={resumo}
              onChange={(e) => setResumo(e.target.value)}
              style={{
                minWidth: "90%",
                height: "100px",
                borderWidth: "1.5px",
                borderRadius: "5px",
                outline: "none",
              }}
            />
          </div>
          <div>
            <label
              htmlFor="autores"
              style={{ display: "block", marginTop: "10px" }}
            >
              Autores (1 por linha)
            </label>
            <textarea
              id="autores"
              value={autores}
              onChange={(e) => setAutores(e.target.value)}
              style={{
                minWidth: "90%",
                height: "100px",
                borderWidth: "1.5px",
                borderRadius: "5px",
                outline: "none",
              }}
            />
          </div>
          <div>
            <label
              htmlFor="editora"
              style={{ display: "block", marginTop: "10px" }}
            >
              Editora
            </label>
            <select
              id="editora"
              value={codEditora}
              onChange={tratarCombo}
              style={{
                minWidth: "90%",
                height: "40px",
                borderWidth: "1.5px",
                borderRadius: "5px",
                outline: "none",
              }}
            >
              {opcoes.map((opcao) => (
                <option key={opcao.value} value={opcao.value}>
                  {opcao.text}
                </option>
              ))}
            </select>
          </div>
          <button
            type="submit"
            className={styles.button}
            style={{
              maxWidth: "80px",
              height: "40px",
              borderWidth: "1.5px",
              borderRadius: "5px",
              outline: "none",
              marginTop: "10px",
              backgroundColor: "rgb(13 110 253)",
              border: "none",
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)"
            }}
          >
            Salvar
          </button>
        </form>
      </main>
    </div>
  );
};

export default LivroDados;
