import Livro from "../modelo/Livro";

export class ControleLivro {
  private livros: Array<Livro>;

  constructor() {
    this.livros = [
      {
        codigo: 1,
        codEditora: 1,
        titulo: "E não sobrou nem um",
        resumo:
          "Lançado originalmente em 1939, E não sobrou nenhum continua a ser um dos livros mais lidos em todo o mundo e um marco literário. Esta edição de luxo é composta por capa dura com pintura trilateral, novo design e fitilho. Na obra, a rainha do crime, Agatha Christie, compõe um rol de personagens inesquecíveis, detalhando seus traços psicológicos, que se tornam cada vez mais exacerbados em função do confinamento, do medo de se tornar a próxima vítima e da suspeita que recai sobre todos. Nesse jogo de gato e rato, a autora quebra as premissas até então vigentes do gênero investigativo e muda, para sempre, as regras do jogo.",
        autores: ["Agatha Christie "],
      },
      {
        codigo: 2,
        codEditora: 2,
        titulo: "Na escuridão da mente",
        resumo:
          "A vida dos Barrett, uma família como qualquer outra, é virada do avesso quando Marjorie, de 14 anos, começa a demonstrar sinais de esquizofrenia aguda. Quando os médicos se mostram incapazes de deter os acessos bizarros e o declínio da sua sanidade, o lar se transforma em um circo de horrores, e os Barrett se veem recorrendo a um padre da região.",
        autores: ["Paul Tremblay"],
      },
      {
        codigo: 3,
        codEditora: 3,
        titulo: "Noite sem fim",
        resumo:
          "Quando Michael encontra Ellie durante uma visita ao Passo do Cigano, é amor à primeira vista. Apaixonados, os dois decidem começar uma vida juntos comprando a propriedade abandonada. No entanto, o casal ignora o aviso de uma estranha senhora sobre a maldição que assola o local… e apesar de não acreditarem em seus augúrios, o mal começa a assombrá-los. Logo, o rapaz descobre que, no Passo do Cigano, muitos acidentes inexplicáveis acontecem. Mas quem ― ou o quê ― está por trás dessas desgraças?",
        autores: ["Agatha Christie "],
      },
    ];
  }

  obterLivros(): Array<Livro> {
    return this.livros;
  }

  incluir(novoLivro: Livro): void {
    const maiorCodigo = Math.max(...this.livros.map((livro) => livro.codigo));
    novoLivro.codigo = maiorCodigo + 1;
    this.livros.push(novoLivro);
  }

  excluir(codigo: number): void {
    const indice = this.livros.findIndex((livro) => livro.codigo === codigo);
    if (indice !== -1) {
      this.livros.splice(indice, 1);
    }
  }
}

const controleLivro = new ControleLivro();

console.log("Livros:", controleLivro.obterLivros());

controleLivro.incluir({
  codigo: 4,
  codEditora: 1,
  titulo: "Livro D",
  resumo: "Resumo do Livro D",
  autores: ["Autor D"],
});

export default ControleLivro;
