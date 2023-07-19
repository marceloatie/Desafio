import React from 'react';
import { useEffect, useState } from 'react';
import { getNoteAtLocalStorage, updateNoteAtLocalStorage, deleteNoteAtLocalStorage } from '../../shared/NotesHelper';
import { Post } from '../../interfaces';
import styles from './NoteListItem.module.css';
import { useRouter } from 'next/navigation';

type Props = {
    post: Post;
    onRemove: () => void;
};

const NoteListItem = ({ post, onRemove }: Props) => {
    const router = useRouter();
    const [textValue, setTextValue] = useState(getNoteAtLocalStorage(post.id));
    const [isTextareaEnabled, setIsTextareaEnabled] = useState(false);

    useEffect(() => {
    }, [post, textValue]);

    const enableTextarea = () => {
        setIsTextareaEnabled(true);
    };

    const revert = () => {
        setTextValue(getNoteAtLocalStorage(post.id));
        setIsTextareaEnabled(false);
    };

    const save = () => {
        updateNoteAtLocalStorage(post.id, textValue);
        setIsTextareaEnabled(false);
    };

    const remove = () => {
        deleteNoteAtLocalStorage(post.id);
        onRemove();
    };

    return (
        <>
            <article>
                {post.title.rendered}
                <textarea
                    value={textValue}
                    className={`${isTextareaEnabled ? '' : styles.textAreaDisabled}`}
                    onChange={(e) => setTextValue(e.target.value)}
                    disabled={!isTextareaEnabled}
                ></textarea>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex'}}>
                    <button className={`${styles.btnAlterar} ${isTextareaEnabled? styles.displayNone:''}`} onClick={enableTextarea}>
                        <i className="bi bi-pencil-fill"></i>
                    </button>
                    <button className={`${styles.btnCancelar} ${isTextareaEnabled? '':styles.displayNone}`} onClick={revert}>
                        <i className="bi bi-arrow-counterclockwise"></i>
                    </button>
                    <button className={`${styles.btnSalvar} ${isTextareaEnabled? '':styles.displayNone}`} onClick={save}>
                        <i className="bi bi-check-square"></i>
                    </button>
                    </div>
                    <button className={styles.btnDeletar} onClick={remove}>
                        <i className="bi bi-trash3-fill"></i>
                    </button>
                </div>
            </article>
        </>
    );
};

export default NoteListItem;
