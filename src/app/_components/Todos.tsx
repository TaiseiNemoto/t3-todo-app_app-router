'use client';

// import { Todo } from './Todo';

// import useSWR from 'swr';
// import { zTodos } from '../api/todo/type';
import { useSession } from 'next-auth/react';

// const fetcher = (url: string) =>
//   fetch(url).then(async (res) => {
//     const data = await res.json();
//     const notes = zTodos.parse(data);
//     return notes;
//   });

export async function Todos() {
  const { data: sessionData } = await useSession();
  // const { data } = useSWR(`/api/todos/${sessionData?.user.id}`, fetcher, {
  //   suspense: true,
  // });
  // console.log(data);

  const res = await fetch(`/api/todos/${sessionData?.user.id}`, {
    method: 'GET',
  });
  console.log(res);

  return (
    <>
      <div>Todo</div>
    </>
  );
}
