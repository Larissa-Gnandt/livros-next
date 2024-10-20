// src/components/Menu.tsx
import React from 'react';
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css'; // Certifique-se de ter o Bootstrap instalado

export const Menu: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Loja Next</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link href="/" className="nav-link">Início</Link>
            </li>
            <li className="nav-item">
              <Link href="/LivroLista" className="nav-link">Lista de Livros</Link>
            </li>
            <li className="nav-item">
              <Link href="/LivroDados" className="nav-link">Dados do Livro</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Menu;