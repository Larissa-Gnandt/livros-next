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
      <td>
        <button onClick={() => excluir(livro.codigo)}>Excluir</button>
        {livro.titulo}
      </td>
      <td>{livro.resumo}</td>
      <td>{nomeEditora}</td>
      <td>
        <ul>
          {livro.autores && livro.autores.length > 0 ? (
            livro.autores.map((autor) => (
              <li key={autor}>{autor}</li> // Use um identificador único, se disponível
            ))
          ) : (
            <li>Nenhum autor disponível</li>
          )}
        </ul>
      </td>
    </tr>
  );
};

