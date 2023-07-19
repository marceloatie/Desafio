import { useState, useEffect } from 'react';
import PostListDetail from '../../components/PostListDetail';
import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import ProgressBar from '../../components/ProgressBar';

export default function PostPage() {
  const router = useRouter();
  const id = router.query.id;

  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    if (id) {
      //id may be not filled yet
      setLoading(true);
      fetch(`/api/post/${id}`)
        .then((res) => res.json())
        .then((data) => {
          setData(data);
          setLoading(false);
        });
    }
  }, [id]);

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
        <PostListDetail item={data} />
      </div>
    </Layout>
  );
}
