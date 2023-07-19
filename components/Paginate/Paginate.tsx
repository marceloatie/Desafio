import * as React from 'react';
import styles from './Paginate.module.css';

type Props = {
  currentPage: number;
  onPageChange: (newPage: number) => void;
};

const Paginate = ({ currentPage, onPageChange }) => {
  const handlePageChange = (newPage) => {
    // Invoke the callback function passed from the parent component
    onPageChange(newPage);
  };

  const changeStateFoward = () => {
    handlePageChange(currentPage + 1);
  };

  const changeStateBack = () => {
    if (currentPage > 1) {
      handlePageChange(currentPage - 1);
    }
  };

  return (
    <div style={{ display: 'flex' }}>
      <button
        onClick={changeStateBack}
        className={styles.btn}
        disabled={currentPage == 1}
      >
        <i className="bi bi-arrow-left-circle"></i>
      </button>
      pagina {currentPage}
      <button onClick={changeStateFoward} className={styles.btn}>
        <i className="bi bi-arrow-right-circle"></i>
      </button>
    </div>
  );
};

export default Paginate;
