'use client';

import { Todo } from '../api/todo/type';
import TodoComponent from './Todo';
import { ProgressBar } from './ProgressBar';

type Props = {
  initialState: Todo[];
};

export default function Todos({ initialState }: Props) {
  return (
    <>
      {initialState.map((todo) => {
        return (
          <section key={todo.id} className="mt-8 space-y-4">
            <TodoComponent todo={todo} />
          </section>
        );
      })}
      <ProgressBar todos={initialState} />
    </>
  );
}
