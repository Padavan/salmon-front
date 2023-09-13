import { FunctionalComponent } from 'preact';
import './Catalog.css';
import { useEffect } from 'preact/hooks';
import { CreateThread } from '../../components/CreateThread/CreateThread';
import { ThreadBox } from '../../components/ThreadBox/ThreadBox';
import { useThread } from '../../hooks/useThread'

export const Catalog: FunctionalComponent = () => {
  const { isFetching, getThreadList, threadList } = useThread();
  
  useEffect(() => {
      getThreadList()
  }, [])

  return (
    <div className="catalog-container">
      <button onClick={getThreadList}>Refresh List</button>
      {isFetching && <div>Loading...</div>}
      <p>Catalog layout</p>
      <div>
        {threadList.map((t: { id: string, text: string, title: string }) => <ThreadBox key={t.id} thread={t} />)}
      </div>
      <div className="catalog-container__center">
        <CreateThread />
      </div>
    </div>
  );
}