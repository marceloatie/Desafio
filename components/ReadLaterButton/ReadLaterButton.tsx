import * as React from 'react';
import { useEffect, useState } from 'react';
import {
  checkReadLaterAtLocalStorage,
  updateReadLaterAtLocalStorage,
} from '../../shared/ReadLaterHelper';
import styles from './ReadLaterButton.module.css';

type Props = {
  postId;
};

const ReadLaterButton = ({ postId }: Props) => {
  const [isReadLater, setReadLater] = useState(
    checkReadLaterAtLocalStorage(postId)
  );

  useEffect(() => {
    updateReadLaterAtLocalStorage(postId, isReadLater);
  }, [isReadLater]);

  const changeState = () => {
    setReadLater(!isReadLater);
  };

  return (
    <>
      <button onClick={changeState} className={styles.btn}>
        <i
          className={isReadLater ? 'bi bi-bookmark-fill' : 'bi bi-bookmark'}
        ></i>
      </button>
    </>
  );
};

export default ReadLaterButton;
