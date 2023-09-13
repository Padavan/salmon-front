import { FunctionalComponent } from 'preact';

type ErrorMessageProps = {
  message: string;
}

export const ErrorMessage:FunctionalComponent<ErrorMessageProps> = ({ message }) => {
  return (
    <div>
      {message}
    </div>
  );
}