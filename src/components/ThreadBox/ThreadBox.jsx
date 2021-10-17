import { h } from 'preact';
import styles from './ThreadBox.css';
import { useState } from 'preact/hooks';
import { Link } from 'preact-router/match';

export const ThreadBox = ({ thread }) => {
  return (
    <Link href={`/thread/${thread.id}`}>
      <div className={styles.post}>
        <div className={styles.content}>
          <h4>{thread.title}</h4>
          <p>{thread.text}</p>
        </div>
      </div>
    </Link>
  );
}