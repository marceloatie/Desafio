import * as React from 'react';
import BackButton from './BackButton/BackButton';
import FavoriteButton from './FavoriteButton/FavoriteButton';
import ReadLaterButton from './ReadLaterButton/ReadLaterButton';
import Notes from './Notes';

import { Post } from '../interfaces';

type PostListDetailProps = {
  item: Post;
};

const PostListDetail = ({ item: post }: PostListDetailProps) => {
  const dateFormatted = new Date(post.date).toLocaleDateString('pt-BR');
  return (
    <div>
      <h1>{post.title.rendered}</h1>
      <p>Publicado: {dateFormatted}</p>
      <blockquote>
        <div dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
      </blockquote>
      <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
      <div style={{ display: 'flex' }}>
        <BackButton />
        <FavoriteButton postId={post.id} />
        <ReadLaterButton postId={post.id} />
      </div>
      <Notes postId={post.id}/>
    </div>
  );
};

export default PostListDetail;
