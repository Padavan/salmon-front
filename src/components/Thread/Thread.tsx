import { FunctionalComponent } from 'preact';
import './Thread.css';
import { useState, useEffect } from 'preact/hooks';
import { Link } from 'preact-router/match';


export const Thread: FunctionalComponent = (props) => {
  const [newComment, setNewComment] = useState('');
  const [fetching, setFetching] = useState(false);
  console.log('props', props);

  const id = props.matches.id;

  // useEffect(() => {
    // getThread();
    // getComments();
  // }, [id]);

  const addComment = () => {
    setFetching(true);
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');

    const data = { threadId: id, comment: newComment };

    fetch('/api/add-comment', {
      method: 'post',
      mode: 'no-cors',
      headers,
      body: JSON.stringify(data),
    })

    setFetching(false);
  }

  const handleComment = (e: Event) => {
    if (e.target instanceof HTMLInputElement) {
      setNewComment(e.target.value)
    }
  }

  return (
    <div>

      <Link href={`/catalog`}>
        Go to catalogs
      </Link>
      <div className="comments-container">
      
        <div className="comments-container">
          <textarea value={newComment} onChange={handleComment} disabled={fetching} />
          <button onClick={addComment}>Add</button>
        </div>  
      </div>
    </div>
  );
}