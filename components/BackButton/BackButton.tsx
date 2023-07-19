import * as React from 'react';
import Link from 'next/link';
import styles from './BackButton.module.css';

type Props = {};

const BackButton = ({}: Props) => (
  <>
    <Link href="/" role="button" className={styles.btn}>
      <i className="bi bi-arrow-left-circle"></i>
    </Link>
  </>
);

export default BackButton;
