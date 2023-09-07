'use client';

import { ClientSafeProvider, signIn } from 'next-auth/react';

export default function ButtonAuth({ id, name }: ClientSafeProvider) {
  return (
    <button
      className="inline-flex w-full cursor-pointer items-center justify-center rounded-md p-4 text-xl font-bold hover:text-green-five"
      onClick={() =>
        void signIn(id, {
          callbackUrl: '/',
        })
      }
    >
      Sign in with {name}
    </button>
  );
}
