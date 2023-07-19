import * as React from 'react';
import PostListItem from './PostListItem';
import { Post } from '../interfaces';
import Filter from './Filter';

type Props = {
  items: Post[];
  categoriaId: string;
  ordemId: string;
  useFilter: boolean;
};

const PostList = ({ items, categoriaId, ordemId, useFilter }: Props) => (
  <>
    {useFilter ? <Filter categoriaId={categoriaId} ordemId={ordemId} /> : null}
    <hr />
    <ul>
      {items.map((item) => (
        <PostListItem key={item.id} post={item} />
      ))}
    </ul>
  </>
);

export default PostList;
