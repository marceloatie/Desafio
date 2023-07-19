import React, { ReactNode } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { Categoria } from '../constants/categoria';

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = 'Teste - Visie Padrões Web' }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/@picocss/pico@1/css/pico.min.css"
      />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css"
      />
    </Head>
    <header>
      <div className="sidenavx">
        <Link href="/">Página inicial</Link>
        <Link href={`/posts/category/${Categoria.desenvolvimentoPessoal}`}>
          Desenvolvimento Pessoal
        </Link>
        <Link href={`/posts/category/${Categoria.estrategiaEGestao}`}>
          Estratégia e Gestão
        </Link>{' '}
        <Link href={`/posts/category/${Categoria.gestaoDePessoas}`}>
          Gestão de Pessoas
        </Link>{' '}
        <Link href="/lerdepois">Ler depois</Link>
        <Link href="/favoritos">Favoritos</Link>
        <Link href="/anotacoes">Anotações</Link>
      </div>
    </header>
    <div className="main">
      <Link href="/">
        <h3>Teste - Visie Padrões Web</h3>
      </Link>
      <hr />
      {children}
      <hr />
      <footer>
        <span>Teste executado por Marcelo Atie</span>
      </footer>
    </div>
  </div>
);

export default Layout;
