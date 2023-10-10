'use client';

import useSWR from 'swr';
import { Todo, zTodos } from '../api/todo/type';
import TodoComponent from './Todo';

type Props = {
  initialState: Todo[];
};

const fetcher = (url: string) =>
  fetch(url).then(async (res) => {
    const data = await res.json();
    const notes = zTodos.parse(data);
    return notes;
  });

export default function Todos({ initialState }: Props) {
  const { data } = useSWR('/api/todos', fetcher, {
    suspense: true,
    fallbackData: initialState,
  });
  console.log(data, 'Todos', initialState);

  return (
    <>
      {data.map((todo) => {
        return (
          <section key={todo.id} className="mt-8 space-y-4">
            <TodoComponent todo={todo} />
          </section>
        );
      })}
    </>
  );
}
