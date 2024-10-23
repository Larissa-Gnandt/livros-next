import { NextApiRequest, NextApiResponse } from "next";
import { ControleLivro } from "../../../classes/controle/ControleLivros";

export const controleLivro = new ControleLivro();

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    switch (req.method) {
      case "GET":
        const livros = controleLivro.obterLivros();
        res.status(200).json(livros);
        break;

      case "POST":
        const novoLivro = req.body;
        controleLivro.incluir(novoLivro);
        res.status(200).json({ message: "Livro incluído com sucesso!" });
        break;

      default:
        res.setHeader("Allow", ["GET", "POST"]);
        res.status(405).end(`Método ${req.method} não permitido`);
        break;
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Ocorreu um erro no servidor." });
  }
};
