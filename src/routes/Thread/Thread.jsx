import { h } from 'preact';
import styles from './Thread.css';
import { useState, useEffect } from 'preact/hooks';
import { Link } from 'preact-router/match';

export const Thread = (props) => {
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

  return (
    <div>

      <Link href={`/catalog`}>
        Go to catalogs
      </Link>
      <div className={styles.commentsContainer}>
      
        <div className={styles.addCommentBox}>
          <textarea value={newComment} onChange={e => setNewComment(e.target.value)} disabled={fetching} />
          <button onClick={addComment}>Add</button>
        </div>  
      </div>
    </div>
  );
}