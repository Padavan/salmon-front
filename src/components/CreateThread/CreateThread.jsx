import { h } from 'preact';
import styles from './CreateThread.css';
import { useState } from 'preact/hooks';

export const CreateThread = () => {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [sending, setSending] = useState('');

  const createThread = async () => {
      const data = {
        title, text
      };
      console.log('stringify: ', JSON.stringify(data));
      setSending(true);

      const headers = new Headers();
      headers.append('Content-Type', 'application/json');
      headers.append('Accept', 'application/json');

      try {
        await fetch('/api/create-thread', {
            method: 'post',
            mode: 'cors',
            cache: 'default',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
          })
      } catch (e) {
        console.error(e)
      };
      setSending(false);
  }

  return (
    <div className={styles.container}>
      <h2> Create New Thread </h2>
      <label for="title">Title</label>
      <input className={styles.title} type="text" name="title" onChange={e => setTitle(e.target.value)} disabled={sending} />
      <label for="text">Text</label>
      <textarea className={styles.text} name="text" onChange={e => setText(e.target.value)} row="10" maxlength="256" disabled={sending} /> 
      <div className={styles.buttonContainer}>
        <button onClick={createThread} disabled={sending}>
          createThread
        </button>
      </div>
    </div>
  );
}