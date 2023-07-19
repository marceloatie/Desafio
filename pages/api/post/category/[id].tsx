import { NextApiRequest, NextApiResponse } from 'next';
import { Post } from '../../../../interfaces';

async function getEndeavorPostData(
  categories: string,
  ordemId: string,
  page: string
) {
  let orderParam = '';
  if (ordemId == 'ASC') {
    orderParam = '&orderby=date&order=asc';
  } else if (ordemId == 'DESC') {
    orderParam = '&orderby=date&order=desc';
  }
  let pageParam = '';
  if (page) {
    pageParam = `&page=${page}`;
  }
  let url = `https://endeavor.org.br/wp-json/wp/v2/posts?categories=${categories}&per_page=5${orderParam}${pageParam}`
  console.log(url);
  const res = await fetch(url);
  const text = await res.text();
  return JSON.parse(text) as Post[];
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id, ordemId, page } = req.query;
  const post = await getEndeavorPostData(
    id as string,
    ordemId as string,
    page as string
  );
  res.status(200).json(post);
};

export default handler;
