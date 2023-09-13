import { FunctionalComponent } from 'preact';
import './ThreadBox.css';
import { Link } from 'preact-router/match';

type ThreadBoxProps = {
  thread: { id: string, title: string, text: string}
}

export const ThreadBox:FunctionalComponent<ThreadBoxProps> = ({ thread }) => {
  return (
    <Link href={`/thread/${thread.id}`}>
      <div className="thread-box">
        <div className="thread-box__content">
          <h4>{thread.title}</h4>
          <p>{thread.text}</p>
        </div>
      </div>
    </Link>
  );
}