import * as React from 'react';
//import Link from 'next/button';
import { useEffect, useState } from 'react';
import {
  checkFavoriteAtLocalStorage,
  updateFavoriteAtLocalStorage,
} from '../../shared/FavoritiesHelper';
import styles from './FavoriteButton.module.css';

type Props = {
  postId;
};

const FavoriteButton = ({ postId }: Props) => {
  const [isFavorited, setFavorited] = useState(
    checkFavoriteAtLocalStorage(postId)
  );

  useEffect(() => {
    updateFavoriteAtLocalStorage(postId, isFavorited);
  }, [isFavorited]);

  const changeState = () => {
    setFavorited(!isFavorited);
  };

  return (
    <>
      <button onClick={changeState} className={styles.btn}>
        <i className={isFavorited ? 'bi bi-star-fill' : 'bi bi-star'}></i>
      </button>
    </>
  );
};

export default FavoriteButton;
