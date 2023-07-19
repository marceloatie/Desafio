import { useState, useEffect } from 'react';
import PostList from '../../components/PostList';
import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import ProgressBar from '../../components/ProgressBar';
import Paginate from '../../components/Paginate/Paginate';

export default function PostsPage() {
  const router = useRouter();
  const { ordemId } = router.query;
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  useEffect(() => {
    setLoading(true);
    let paramPage = '?page=1';
    if (currentPage) {
      paramPage = `?page=${currentPage}`;
    }
    let paramOrdemId = '';
    if (ordemId == 'DESC' || ordemId == 'ASC') {
      paramOrdemId = '&ordemId=${ordemId}';
    }
    fetch(`/api/post${paramPage}${paramOrdemId}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((err) => setData(err));
  }, [ordemId, currentPage]);

  if (isLoading)
    return (
      <Layout>
        <ProgressBar />
      </Layout>
    );
  if (!data)
    return (
      <Layout>
        <p>No post data</p>
      </Layout>
    );

  return (
    <Layout>
      <div>
        <PostList
          items={data}
          categoriaId=""
          ordemId={`${ordemId}`}
          useFilter={true}
        />
      </div>
      <Paginate currentPage={currentPage} onPageChange={handlePageChange} />
    </Layout>
  );
}
