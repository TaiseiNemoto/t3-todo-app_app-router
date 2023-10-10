import Head from 'next/head';
import Image from 'next/image';
import { getServerSession } from 'next-auth';
import { Suspense } from 'react';

import { CreateTodo } from './_components/CreateTodo';
import ErrorBoundary from './_components/ErrorBoundary';
import Loading from './_components/Loading';
import FetchError from './_components/FetchError';
import Todos from './_components/Todos';
import ButtonLogout from './_components/ButtonLogout';
import ButtonLogin from './_components/ButtonLogin';
import { authOptions } from '@/auth';
import { apiUrl } from '../../constants/api';
import { zTodos } from './api/todo/type';

export default async function Home() {
  const session = await getServerSession(authOptions);
  const todos = await getTodos();

  return (
    <>
      <Head>
        <title>Todo App</title>
        <meta name="description" content="Full stack todo app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen bg-olive-one p-0 selection:bg-green-two md:py-24 md:px-8">
        <main className="mx-auto min-h-screen max-w-none rounded-none bg-cream-four px-5 pt-24 pb-10 outline-none md:max-w-[60rem] md:rounded-2xl md:px-8 md:outline md:outline-4 md:outline-offset-8 md:outline-cream-four">
          <h1 className="mb-6 text-center text-4xl font-bold text-gray-three">
            ToDo List
          </h1>
          {session ? (
            <>
              <div className="flex flex-col items-center">
                <p className="text-l text-white mb-4 text-center">
                  <span>Logged in as {session.user?.email}</span>
                </p>
                <ButtonLogout />
              </div>
              <div>
                <CreateTodo />
                <ErrorBoundary fallback={<FetchError />}>
                  <Suspense fallback={<Loading />}>
                    <Todos initialState={todos} />
                  </Suspense>
                </ErrorBoundary>
              </div>
            </>
          ) : (
            <div className="flex flex-col items-center">
              <ButtonLogin />
              <div className="mb-5 text-xl">
                <p className="text-center text-gray-four">
                  Keep your life in order with todolist
                </p>
                <p className="text-center text-gray-four">
                  - The ultimate productivity tool -
                </p>
              </div>
              <div className="">
                <Image
                  src="/images/main-img.png"
                  width={600}
                  height={600}
                  alt="main-img"
                />
              </div>
            </div>
          )}
        </main>
      </div>
    </>
  );
}

export const getTodos = async () => {
  const res = await fetch(`${apiUrl}/todos`, { cache: 'no-store' });
  const data = await res.json();
  const todos = zTodos.parse(data);
  return todos;
};
