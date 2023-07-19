import { useState, useEffect } from 'react';
import PostList from '../../components/PostList';
import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import ProgressBar from '../../components/ProgressBar';

import { getAllReadLaterAtLocalStorage } from '../../shared/ReadLaterHelper';

export default function PostsPage() {
  const router = useRouter();
  const { ordemId } = router.query;
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    let paramInclude = '';
    let readLaterList = getAllReadLaterAtLocalStorage();
    if (readLaterList.length > 0) {
      paramInclude = `?include=${readLaterList}`;
      console.log(paramInclude);
      fetch(`/api/post${paramInclude}`)
        .then((res) => res.json())
        .then((data) => {
          setData(data);
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, []);

  if (isLoading)
    return (
      <Layout>
        <ProgressBar />
      </Layout>
    );
  if (!data)
    return (
      <Layout>
        <p>Sem artigos marcados para ler depois</p>
      </Layout>
    );

  return (
    <Layout>
      <div>
        <PostList
          items={data}
          categoriaId=""
          ordemId={`${ordemId}`}
          useFilter={false}
        />
      </div>
    </Layout>
  );
}
