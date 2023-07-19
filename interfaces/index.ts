export type Post = {
  id: number;
  date: Date;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  default_img: any[];
};

export type LerDepois = {
  artigo: number;
};

export type Favorito = {
  artigo: number;
};

export type Anotacao = {
  artigo: number;
  texto: string;
};
