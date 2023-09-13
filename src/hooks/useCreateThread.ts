import { useState } from 'preact/hooks';
import { API_URL } from 'env';


export const useCreateThread = () => {
  const [isFetching, setFetching] = useState(false);
  // const [threadList, setThreadList] = useState([]);
  const [error, setError] = useState<Error | null>(null);

  const createThread = async (title: string, text: string) => {
      const data = {
        title, text
      };
      console.log('stringify: ', JSON.stringify(data));
      setFetching(true);

      const headers = new Headers();
      headers.append('Content-Type', 'application/json');
      headers.append('Accept', 'application/json');

      try {
        await fetch(API_URL + '/board/thread/create',
        {
          method: 'post',
          mode: 'cors',
          cache: 'default',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data),
        })
      } catch (e) {
        if (e instanceof Error) {
          setError(e);
        }
        console.error(e)
      };
      setFetching(false);
  }

  return {
    isFetching,
    createThread,
    error,
  }

}