import type { NextApiRequest, NextApiResponse } from "next";
import ControleEditora from "../../../classes/controle/ControleEditora";

export const controleEditora = new ControleEditora();

export default (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.method === "GET") {
      const editoras = controleEditora.getEditoras();
      return res.status(200).json(editoras);
    }

    return res.status(405).json({ message: "Método não permitido" });
  } catch (error) {
    return res.status(500).json({ message: "Erro no servidor", error });
  }
};
