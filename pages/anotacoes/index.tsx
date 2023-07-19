import { useState, useEffect } from 'react';
import NoteList from '../../components/NoteList';
import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import ProgressBar from '../../components/ProgressBar';

import { getAllNotesAtLocalStorage } from '../../shared/NotesHelper';

export default function PostsPage() {
  const router = useRouter();
  const { ordemId } = router.query;
  const [data, setData] = useState(null);
  const [noteKeys, setNoteKeys] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const onRemove = () => {
    setNoteKeys(Object.keys(getAllNotesAtLocalStorage()));
  };

  useEffect(() => {
    setLoading(true);
    setNoteKeys(Object.keys(getAllNotesAtLocalStorage()));
    let paramInclude = '';
    if (noteKeys.length > 0) {
      paramInclude = `?include=${noteKeys}`;
      fetch(`/api/post${paramInclude}`)
        .then((res) => res.json())
        .then((data) => {
          setData(data);
          setLoading(false);
        });
    } else {
      setData(false);
      setLoading(false);
    }
  }, [noteKeys.length]);

  if (isLoading)
    return (
      <Layout>
        <ProgressBar />
      </Layout>
    );
  if (!data)
    return (
      <Layout>
        <p>Sem artigos com anotações para exibir</p>
      </Layout>
    );

  return (
    <Layout>
      <div>
        <NoteList
          items={data}
          onRemove={onRemove}
        />
      </div>
    </Layout>
  );
}
