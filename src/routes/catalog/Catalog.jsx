import { h } from 'preact';
import style from './Catalog.css';
import { useState, useEffect } from 'preact/hooks';
import { CreateThread } from '../../components/CreateThread/CreateThread';
import { ThreadBox } from '../../components/ThreadBox/ThreadBox';

export const Catalog = () => {
  const [threadList, setThreadList] = useState([]);
  const [fetching, setFetching] = useState(false);

  const getThreadList = () => {
    setFetching(true);
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');

    fetch('/api/thread-list', {
        method: "GET",
        mode: 'no-cors',
        headers,
      })
      .then(response => response.json())
      .then(({ data }) => {
        setThreadList(data)
      })
      .catch(error => console.log("error", error));

    setFetching(false);
  } 

  useEffect(() => {
      getThreadList()
  }, [])

  return (
    <div className={style.container}>
      <button onClick={getThreadList}>Refresh List</button>
      {fetching && <div>Loading...</div>}
      <p>Catalog layout</p>
      <div>
        {threadList.map(t => <ThreadBox key={t.id} thread={t} />)}
      </div>
      <div className={style.center}>
        <CreateThread />
      </div>
    </div>
  );
}