import { FunctionalComponent } from 'preact';
import { useState } from 'preact/hooks';
import './CreateThread.css';
import { useCreateThread } from '../../hooks/useCreateThread';
import { ErrorMessage } from '../ErrorMessage/ErrorMessage';

export const CreateThread: FunctionalComponent = () => {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  // const [sending, setSending] = useState(false);

  const { isFetching, createThread, error} = useCreateThread();
  
  const handleTitleInput = (e: Event) => {
    if (e.target instanceof HTMLInputElement) {
      setTitle(e.target.value)
    }
  }

  const handleTextAreInput = (e: Event) => {
    if (e.target instanceof HTMLInputElement) {
      setText(e.target.value);
    }
  }

  const handleCreateButton = () => {
    createThread(title, text)
  }

  return (
    <div className={"create-thread__container"}>
      <h2> Create New Thread </h2>
      <label for="title">Title</label>
      <input
        className={"create-thread__title"}
        type="text"
        name="title"
        onChange={handleTitleInput}
        disabled={isFetching}
      />
      <label for="text">Text</label>
      <textarea
        className={"create-thread__text"}
        name="text"
        onChange={handleTextAreInput}
        rows={10}
        maxLength={4000}
        disabled={isFetching}
      /> 
      <div className={"create-thread__buttonContainer"}>
        <button onClick={handleCreateButton} disabled={isFetching}>
          createThread
        </button>
      </div>
      {error !== null && <ErrorMessage message={error.message} />}
    </div>
  );
}