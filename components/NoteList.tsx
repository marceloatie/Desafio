import * as React from 'react';
import NoteListItem from './NoteListItem/NoteListItem';
import { Post } from '../interfaces';

type Props = {
  items: Post[];
  onRemove: () => void;
};



const NoteList = ({ items, onRemove }: Props) => (
  <>
    <hr />
    <ul>
      {items.map((item) => (
        <NoteListItem key={item.id} post={item} onRemove={onRemove}/>
      ))}
    </ul>
  </>
);

export default NoteList;
