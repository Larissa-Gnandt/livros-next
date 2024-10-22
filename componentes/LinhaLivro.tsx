// Importações necessárias
import React from "react";
import ControleEditora from "../classes/controle/ControleEditora"; // Ajuste o caminho conforme necessário
import { Livro } from "../classes/modelo/Livro"; // Ajuste o caminho conforme necessário

// Instância do controlador de editoras
export const controleEditora = new ControleEditora();

// Definindo a interface para as props do componente
interface LinhaLivroProps {
  livro: Livro; // Defina a interface Livro conforme necessário
  excluir: (codigo: number) => void; // Método para exclusão
}

// Componente LinhaLivro
export const LinhaLivro: React.FC<LinhaLivroProps> = (props) => {
  const { livro, excluir } = props;
  const nomeEditora = controleEditora.getNomeEditora(livro.codEditora);

  return (
    <tr>
      <td
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <button
          style={{
            backgroundColor: "rgb(220, 53, 69)",
            color: "white",
            padding: "7px",
            border: "none",
            borderRadius: "5px",
            marginTop: "10px",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)"
          }}
          onClick={() => excluir(livro.codigo)}
        >
          Excluir
        </button>
        <div style={{ textAlign: "center", marginTop: "10px" }}>
          {livro.titulo}
        </div>
      </td>
      <td
        style={{
          maxWidth: "700px",
          overflowWrap: "break-word",
          whiteSpace: "normal",
          marginTop: "10px",
        }}
      >
        <div style={{ marginTop: "10px", marginLeft: '10px',marginRight: '20px', textAlign: "justify" }}>
          {livro.resumo}
        </div>
      </td>
      <td>{nomeEditora}</td>
      <td>
        <ul>
          {livro.autores && livro.autores.length > 0 ? (
            livro.autores.map((autor) => <li key={autor}>{autor}</li>)
          ) : (
            <li>Nenhum autor disponível</li>
          )}
        </ul>
      </td>
    </tr>
  );
};

export default LinhaLivro;
