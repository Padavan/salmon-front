export type Thread = {
  id: number,
  text: string,
  title: string,
  date: string,
};

export type Post = {
  id: number,
  threadId: number,
  text: string,
  date: string,
};