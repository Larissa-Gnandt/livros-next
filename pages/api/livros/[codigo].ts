import { NextApiRequest, NextApiResponse } from "next";
import { controleLivro } from "./index";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { codigo } = req.query;

  try {
    switch (req.method) {
      case "DELETE":
        controleLivro.excluir(Number(codigo));
        res.status(200).json({ message: "Livro excluído com sucesso!" });
        break;

      default:
        res.setHeader("Allow", ["DELETE"]);
        res.status(405).end(`Método ${req.method} não permitido`);
        break;
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Ocorreu um erro no servidor." });
  }
};
