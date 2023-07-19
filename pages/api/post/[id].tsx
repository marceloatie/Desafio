import { NextApiRequest, NextApiResponse } from 'next';
import { Post } from '../../../interfaces';

async function getEndeavorPostDataById(id: string) {
  const res = await fetch(`https://endeavor.org.br/wp-json/wp/v2/posts/${id}`);
  const text = await res.text();
  return text;
  //return JSON.parse(text) as Post;
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;
  const post = await getEndeavorPostDataById(id as string);
  res.status(200).send(post);
  //res.status(200).json(post);
};

export default handler;
