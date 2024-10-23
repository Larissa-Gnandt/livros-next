import type { NextApiRequest, NextApiResponse } from "next";
import { controleEditora } from "./index";

export default (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.method === "GET") {
      const { codEditora } = req.query;
      const codigo = parseInt(codEditora as string);

      const nomeEditora = controleEditora.getNomeEditora(codigo);

      if (nomeEditora) {
        return res.status(200).json({ nome: nomeEditora });
      } else {
        return res.status(404).json({ message: "Editora não encontrada" });
      }
    }

    return res.status(405).json({ message: "Método não permitido" });
  } catch (error) {
    return res.status(500).json({ message: "Erro no servidor", error });
  }
};
