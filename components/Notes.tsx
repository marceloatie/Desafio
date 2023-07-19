import * as React from 'react';
import { useEffect, useState } from 'react';
import { getNoteAtLocalStorage, updateNoteAtLocalStorage, deleteNoteAtLocalStorage } from '../shared/NotesHelper';

type Props = {
  postId: number;
};

const Notes = ({ postId }: Props) => {
  const [textValue, setTextValue] = useState(getNoteAtLocalStorage(postId));

  useEffect(() => {
    if (textValue && textValue.length > 0) {
      updateNoteAtLocalStorage(postId, textValue);
    } else {
      deleteNoteAtLocalStorage(postId);
    }
  }, [postId, textValue]);

  return (
    <>
      Anotações
      <textarea value={textValue} onChange={(e) => setTextValue(e.target.value)}></textarea>
    </>
  );
};

export default Notes;
