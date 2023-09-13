import { Thread, Post } from '../types/board.types';

export const threadMocks: Thread[] = [
  {
    id: 1,
    text: "Thread text 1",
    title: "Thread title 1",
    date: new Date().toISOString(),
  },
  {
    id: 2,
    text: "Thread text 2",
    title: "Thread title 2",
    date: new Date().toISOString(),
  },
];

export const postMocks: Post = {
  id: 1,
  threadId: 1,
  text: "Post text 1",
  date: new Date().toISOString(),
};

export const mockPostList = Array.from( new Array(100)).map(n => ({
  ...postMocks,
  id: n,
  text: postMocks.text + n,
}));