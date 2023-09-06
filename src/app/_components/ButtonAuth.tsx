'use client';

import { signIn } from 'next-auth/react';

type providerProps = {
  id: string;
  name: string;
  type: string;
  signinUrl: string;
  callbackUrl: string;
};

export default function ButtonAuth(provider: providerProps) {
  <button
    className="inline-flex w-full cursor-pointer items-center justify-center rounded-md p-4 text-xl font-bold hover:text-green-five"
    onClick={() =>
      void signIn(provider.id, {
        callbackUrl: '/',
      })
    }
  >
    Sign in with {provider.name}
  </button>;
}
