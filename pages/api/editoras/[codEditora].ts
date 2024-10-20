import type { NextApiRequest, NextApiResponse } from "next";
import { controleEditora } from "./index"; // f) Importar o controlador de editoras

// g) Definir o manipulador de requisições
export default (req: NextApiRequest, res: NextApiResponse) => {
  try {
    // Verifica se o método é GET
    if (req.method === "GET") {
      // h) Pega o codEditora da URL e converte para number
      const { codEditora } = req.query;
      const codigo = parseInt(codEditora as string);

      // Busca o nome da editora pelo código
      const nomeEditora = controleEditora.getNomeEditora(codigo);

      // Se o nome for encontrado, responde com status 200 e o nome no formato JSON
      if (nomeEditora) {
        return res.status(200).json({ nome: nomeEditora });
      } else {
        return res.status(404).json({ message: "Editora não encontrada" });
      }
    }

    // d) Tratamento de métodos não permitidos
    return res.status(405).json({ message: "Método não permitido" });
  } catch (error) {
    // d) Tratamento de erros do servidor
    return res.status(500).json({ message: "Erro no servidor", error });
  }
};
