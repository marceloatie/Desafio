import {
    getDictAtLocalStorage,
    addOrUpdateValueAtLocalStorage,
    removeKeyAtLocalStorage
  } from './LocalStorageHelper';
  
  const notesKey = 'notes';
  
  export function getNoteAtLocalStorage(postId): string {
    let noteList = getDictAtLocalStorage(notesKey);
    return noteList[postId]
  }
  
  export function updateNoteAtLocalStorage(postId, text: string) {
    addOrUpdateValueAtLocalStorage(notesKey, postId, text);
  }
  
  export function getAllNotesAtLocalStorage(): Record<string, string> {
    return getDictAtLocalStorage(notesKey);
  }

  export function deleteNoteAtLocalStorage(postId) {
    return removeKeyAtLocalStorage(notesKey, postId);
  }
  