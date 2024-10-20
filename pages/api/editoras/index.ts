import type { NextApiRequest, NextApiResponse } from "next";
import ControleEditora from "../../../classes/controle/ControleEditora"; // ajuste o caminho conforme necessário

// a) Instanciar a classe ControleEditora
export const controleEditora = new ControleEditora();

// b) Definir o manipulador de requisições
export default (req: NextApiRequest, res: NextApiResponse) => {
  try {
    // c) Tratamento para o método GET
    if (req.method === "GET") {
      const editoras = controleEditora.getEditoras();
      return res.status(200).json(editoras);
    }

    // d) Tratamento de métodos não permitidos
    return res.status(405).json({ message: "Método não permitido" });
  } catch (error) {
    // d) Tratamento de erros
    return res.status(500).json({ message: "Erro no servidor", error });
  }
};
