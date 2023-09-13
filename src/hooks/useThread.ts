import { useState } from 'preact/hooks';
import { API_URL } from 'env';

export const useThread = () => {
  const [isFetching, setFetching] = useState(false);
  const [threadList, setThreadList] = useState([]);

  const getThreadList = async () => {
    setFetching(true);
    const headers = new Headers({
      'Content-Type': 'application/json',
    });

    console.log("thread", API_URL)
    try {
      const response = await fetch(API_URL + '/board/threads', {
        method: "GET",
        mode: 'no-cors',
        headers,
      });
      console.log("response", response);
      const responseJson = await response.json();
      console.log("data", responseJson);
      setThreadList(responseJson.data);
    } catch(error) {
      console.error(error);
    }
    

    setFetching(false);
  } 

  return {
    isFetching,
    threadList,
    getThreadList,
  }

}