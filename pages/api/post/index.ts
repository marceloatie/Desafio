import { NextApiRequest, NextApiResponse } from 'next';
import { Post } from '../../../interfaces';
import { Categoria } from '../../../constants/categoria';

async function getEndeavorPostData(
  categories: string,
  ordemId: string,
  include: string,
  page: string
) {
  let perPage = '&per_page=5';
  let orderParam = '';
  if (ordemId == 'ASC') {
    orderParam = '&orderby=date&order=asc';
  } else if (ordemId == 'DESC') {
    orderParam = '&orderby=date&order=desc';
  }
  let includeParam = '';
  if (include) {
    includeParam = `&include=${include}`;
    perPage = '&per_page=50';
  }
  let pageParam = '';
  if (page) {
    pageParam = `&page=${page}`;
  }
  let url = `https://endeavor.org.br/wp-json/wp/v2/posts?categories=${categories}${perPage}${pageParam}${orderParam}${includeParam}`;
  
  console.log(url)
  const res = await fetch(url);
  
  const text = await res.text();
  return JSON.parse(text) as Post[];
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { ordemId, include, page } = req.query;
  const defaltCategories = `${Categoria.desenvolvimentoPessoal},${Categoria.estrategiaEGestao},${Categoria.gestaoDePessoas}`;
  const posts = await getEndeavorPostData(
    defaltCategories,
    ordemId as string,
    include as string,
    page as string
  );
  res.status(200).json(posts);
};

export default handler;
