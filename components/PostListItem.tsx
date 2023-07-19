import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import FavoriteButton from './FavoriteButton/FavoriteButton';
import ReadLaterButton from './ReadLaterButton/ReadLaterButton';

import { Post } from '../interfaces';

type Props = {
  post: Post;
};
const PostListItem = ({ post }: Props) => {
  const dateFormatted = new Date(post.date).toLocaleDateString('pt-BR');
  return (
    <>
      <article>
        <Link href={`/posts/${post.id}`} as={`/posts/${post.id}`}>
          <img
            src={post.default_img[0]}
            width="50"
            height="50"
            alt=""
          />
          {post.title.rendered}
        </Link>
        <div dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
        {dateFormatted}
        <div style={{ display: 'flex' }}>
          <FavoriteButton postId={post.id} />
          <ReadLaterButton postId={post.id} />
        </div>
      </article>
    </>
  );
};

export default PostListItem;
