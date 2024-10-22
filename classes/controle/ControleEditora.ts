import Editora from "../modelo/Editora";

class ControleEditora {
  private editoras: Array<Editora>;

  constructor() {
    this.editoras = [
      { codEditora: 1, nome: "Globo Livros" },
      { codEditora: 2, nome: "Bertrand Brasil" },
      { codEditora: 3, nome: "HarperCollins" },
      { codEditora: 4, nome: "Outra" },
    ];
  }

  getEditoras(): Array<Editora> {
    return this.editoras;
  }

  getNomeEditora(codEditora: number): string | undefined {
    const editoraFiltrada = this.editoras.filter(
      (e) => e.codEditora === codEditora
    );
    return editoraFiltrada.length > 0 ? editoraFiltrada[0].nome : undefined;
  }
}

export default ControleEditora;
