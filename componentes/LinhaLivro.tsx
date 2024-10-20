// Importações necessárias
import React from "react";
import ControleEditora from "../classes/controle/ControleEditora"; // Ajuste o caminho conforme necessário
import { Livro } from "../classes/modelo/Livro"; // Ajuste o caminho conforme necessário

// Instância do controlador de editoras
export const controleEditora = new ControleEditora();

// Definindo a interface para as props do componente
interface LinhaLivroProps {
  livro: Livro; // Defina a interface Livro conforme necessário
  excluir: () => void; // Método para exclusão
}

// Componente LinhaLivro
export const LinhaLivro: React.FC<LinhaLivroProps> = (props) => {
  // Aqui, você pode acessar props.livro e props.excluir

  return (
    <tr>
      <td>{props.livro.codigo}</td>
      <td>{props.livro.codEditora}</td>
      <td>{props.livro.titulo}</td>
      <td>{props.livro.resumo}</td>
      <td>{props.livro.autores}</td>
      <td>
        <button onClick={props.excluir}>Excluir</button>
      </td>
    </tr>
  );
};
